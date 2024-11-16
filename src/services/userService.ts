import { UUID, hash } from "node:crypto";
import db from "../database/db";


type EmailAndPassword = {
  email: string;
  password: string;
}

export function findUserByEmail(email: string) {
  return db.user.findUnique({
    where: {
      email,
    },
  });
}

export function createUserByEmailAndPassword(user: EmailAndPassword) {
  user.password = hash(
    user.password as string,
    process.env.CRYPTO_HASH_CODE || ""
  );
  return db.user.create({
    data: user,
  });
}

export function findUserById(id: UUID) {
  return db.user.findUnique({
    where: {
      id,
    },
  });
}
