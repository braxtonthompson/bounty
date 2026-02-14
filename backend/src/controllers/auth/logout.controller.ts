import type { Request, Response } from "express";

const logoutController = (req: Request, res: Response) => {
    return res.status(200).json({ message: "Success" })
}

export default logoutController;