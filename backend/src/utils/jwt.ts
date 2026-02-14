import jwt from "jsonwebtoken";

export type AccessTokenPayload = {
    sub: string;          // user id
    email: string;
    roles?: string[];
};

const secret = process.env.JWT_ACCESS_SECRET!;
const ttl = process.env.ACCESS_TOKEN_TTL ?? "15m";

export function signAccessToken(payload: AccessTokenPayload) {
    // TODO: Return ttl from env variables
    return jwt.sign(payload, secret, { expiresIn: "15m" });
}

export function verifyAccessToken(token: string) {
    return jwt.verify(token, secret) as AccessTokenPayload & jwt.JwtPayload;
}
