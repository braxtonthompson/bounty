import bcrypt from "bcrypt";
import { userRepo } from "../repos/userRepo";

const invalidMessage = "Invalid email/password.";

type LoginResult =
  | { ok: true; user: { id: string; firstName: string; lastName: string; email: string } }
  | { ok: false; status: 401; message: string };

export async function login(email: string, password: string): Promise<LoginResult> {
  const user = await userRepo.findByEmail(email);

  if (!user) return { ok: false, status: 401, message: invalidMessage };

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return { ok: false, status: 401, message: invalidMessage };

  return {
    ok: true,
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  };
}
