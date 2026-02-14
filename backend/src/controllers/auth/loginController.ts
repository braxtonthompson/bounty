import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { User } from "../../../generated/prisma/client";

interface ILoginRequest {
    email: string,
    password: string
}

interface ILoginResponse {
    message: string,
    data: object,
    users: User[]
}

const loginController = async (req: Request<ILoginRequest>, res: Response<ILoginResponse>) => {
    const users = await prisma.user.findMany();
    return res.status(200).json({ message: "Success", data: req.body, users: users })
}

export default loginController;