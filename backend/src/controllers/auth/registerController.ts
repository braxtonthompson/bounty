import type { Request, Response } from "express";

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

const registerController = (req: Request<IRegisterRequest>, res: Response<IRegisterResponse>) => {
    return res.status(200).json({ message: "Success", data: req.body })
}

export default registerController;