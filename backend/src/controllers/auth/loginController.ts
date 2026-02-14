import { Request, Response } from "express";
import { login } from "../../services/authService";
import { signAccessToken } from "../../utils/jwt";

type ILoginRequest = { email: string; password: string };

const loginController = async (req: Request<{}, {}, ILoginRequest>, res: Response) => {
  const { email, password } = req.body;

  const result = await login(email, password);

  if (!result.ok) {
    return res.status(result.status).json({ message: result.message });
  }

  const accessToken = signAccessToken({ sub: result.user.id, email: result.user.email });

  return res.status(200).json({
    message: "Success",
    data: accessToken,
  });
};

export default loginController;