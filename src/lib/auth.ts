import jwt from "jsonwebtoken"

export function createToken() {
 return jwt.sign(
  { admin: true },
  process.env.JWT_SECRET!,
  { expiresIn: "1d" }
 )
}