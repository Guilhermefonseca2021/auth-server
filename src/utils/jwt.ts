import jwt from "jsonwebtoken";
import { randomBytes } from "node:crypto";

// Usually I keep the token between 5 minutes - 15 minutes
export function generateAccessToken(user: User) {
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY || "", {
    expiresIn: "15m",
  });
}

// Generate a random string as refreshToken
export function generateRefreshToken() {
  const token = randomBytes(16).toString("base64url");
  return token;
} 

export function generateTokens(user: User) {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken();
  return { accessToken, refreshToken };
}
