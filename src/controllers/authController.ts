import { NextFunction, Request, Response } from "express";
import {
  createUserByEmailAndPassword,
  findUserByEmail,
} from "../services/userService";
import { generateTokens } from "../utils/jwt";
import { addRefreshTokenToWhitelist } from "../services/authServices";

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("You must provide an email and a password.");
    }

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      res.status(400);
      throw new Error("Email already in use.");
    }
    
    const user = await createUserByEmailAndPassword({ email, password });
    const { accessToken, refreshToken } = generateTokens(user);
    await addRefreshTokenToWhitelist({ refreshToken, userId: existingUser.id });
    
    res.json({
      accessToken,
      refreshToken,
    });
  } catch (err) {
    next(err);
  }
}
