import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";

export type AuthedRequest = Request & {
    user?: { id: string; email: string; roles?: string[] };
};

export function authenticate(req: AuthedRequest, res: Response, next: NextFunction) {
    const header = req.header("Authorization");
    //   const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;
    const token = header?.split(" ")[1];


    if (!token) return res.status(401).json({ message: "Missing Bearer token" });

    try {
        const payload = verifyAccessToken(token);
        req.user = { id: payload.sub, email: payload.email, roles: payload.roles };
        return next();
    } catch {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}
