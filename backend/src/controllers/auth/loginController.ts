import { Request, Response } from "express";
import { login } from "../../services/authService";

type ILoginRequest = { email: string; password: string };

const loginController = async (req: Request<{}, {}, ILoginRequest>, res: Response) => {
  const { email, password } = req.body;

  const result = await login(email, password);

  if (!result.ok) {
    return res.status(result.status).json({ message: result.message });
  }

  return res.status(200).json({
    message: "Success",
    data: result.user,
  });
};

export default loginController;