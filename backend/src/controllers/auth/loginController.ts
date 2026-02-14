import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { User } from "../../../generated/prisma/client";
import bcrypt from "bcrypt";

interface ILoginRequest {
    email: string,
    password: string
}

interface ILoginResponse {
    message: string,
    data: object,
}

const loginController = async (req: Request<ILoginRequest>, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await prisma.user.findUnique({
        where: { email: email }
    })

    const invalidMessage = "Invalid email/password."
    if (!existingUser) {
        return res.status(404).json({ message: invalidMessage })
    }

    const isValidPassword = await bcrypt.compare(password, existingUser.password)

    if (!isValidPassword) {
        return res.status(403).json({ message: invalidMessage })
    }

    return res.status(200).json({ 
        message: "Success", 
        data: {
            id: existingUser.id,
            firstName: existingUser.firstName,
            lastName: existingUser.lastName,
            email: existingUser.email
        }
    })
}

export default loginController;