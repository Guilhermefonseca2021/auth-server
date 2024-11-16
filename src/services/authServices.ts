import { UUID } from "crypto";
import db from "../database/db";
import hashToken from "../utils/hashToken";

type validateToken = {
  refreshToken: string;
  userId: UUID;
};
// used when we create a refresh token.
// a refresh token is valid for 30 days
// that means that if a user is inactive for more than 30 days, he will be required to log in again
export function addRefreshTokenToWhitelist({ refreshToken, userId }: validateToken) {
  return db.refreshToken.create({
    data: {
      hashedToken: hashToken(refreshToken),
      userId,
      expireAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    },
  });
}

// used to check if the token sent by the client is in the database.
export function findRefreshToken(token: string) {
  return db.refreshToken.findUnique({
    where: {
      hashedToken: hashToken(token),
    },
  });
}

// soft delete tokens after usage.
export function deleteRefreshTokenById(id: UUID) {
  return db.refreshToken.update({
    where: {
      id,
    },
    data: {
      revoked: true,
    },
  });
}

export function revokeTokens({userId}: validateToken) {
  return db.refreshToken.updateMany({
    where: {
      userId,
    },
    data: {
      revoked: true,
    },
  });
}
