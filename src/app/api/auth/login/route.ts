import { NextResponse } from "next/server"
import { createToken } from "@/lib/auth"

export async function POST(req: Request) {

 const { email, password } = await req.json()

 if (
  email === process.env.ADMIN_EMAIL &&
  password === process.env.ADMIN_PASSWORD
 ) {

  const token = createToken()

  const res = NextResponse.json({ success: true })

  res.cookies.set("admin_token", token, {
   httpOnly: true,
   path: "/"
  })

  return res
 }

 return NextResponse.json(
  { error: "Invalid credentials" },
  { status: 401 }
 )
}