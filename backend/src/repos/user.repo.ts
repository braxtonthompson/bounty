import { prisma } from "../lib/prisma";

export const userRepo = {
  findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  },
};
