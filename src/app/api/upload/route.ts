import { NextResponse } from "next/server"
import { ensureUploadDir } from "@/lib/upload"
import fs from "fs"
import path from "path"

export async function POST(req: Request) {

 const data = await req.formData()

 const file = data.get("file") as File

 const uploadDir = ensureUploadDir()

 const bytes = await file.arrayBuffer()

 const buffer = Buffer.from(bytes)

 const filename = Date.now() + "-" + file.name

 const filePath = path.join(uploadDir, filename)

 fs.writeFileSync(filePath, buffer)

 return NextResponse.json({
  path: "/uploads/" + filename
 })
}