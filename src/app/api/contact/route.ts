import { NextResponse } from "next/server"

export async function POST(req: Request) {

  const { name, email, message } = await req.json()

  console.log("New Message:")
  console.log(name, email, message)

  return NextResponse.json({
    success: true
  })

}