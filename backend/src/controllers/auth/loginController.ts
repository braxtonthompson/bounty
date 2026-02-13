import type { Request, Response } from "express";

interface ILoginRequest {
    email: string,
    password: string
}

interface ILoginResponse {
    message: string,
    data: object
}

const loginController = (req: Request<ILoginRequest>, res: Response<ILoginResponse>) => {
    return res.status(200).json({ message: "Success", data: req.body })
}

export default loginController;