import { createHash } from "node:crypto";

function hashToken(token: string) {
  return createHash("sha512").update(token).digest("hex");
}

export default hashToken;
