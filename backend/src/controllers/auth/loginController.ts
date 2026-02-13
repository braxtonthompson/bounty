import type { Request, Response } from "express";

const loginController = (req: Request, res: Response) => {
    return res.status(200).json({ message: "Success" })
}

export default loginController;