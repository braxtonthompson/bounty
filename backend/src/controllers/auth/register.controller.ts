import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";

interface IRegisterRequest {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

interface IRegisterResponse {
    message: string,
    data: object,
}

const registerController = async (req: Request<IRegisterRequest>, res: Response) => {
    const email = req.body.email;
    const existingUser = await prisma.user.findUnique({
        where: { email: email }
    })

    if (existingUser) {
        return res.status(409).json({ message: "User already exists." })
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    const newUserInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    }

    const newUser = await prisma.user.create({ data: newUserInfo })

    return res.status(200).json({ 
        message: "Success", 
        data: { 
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email
        } 
    })
}

export default registerController;