import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {

 const products = await prisma.product.findMany({
  orderBy: { createdAt: "desc" }
 })

 return NextResponse.json(products)
}

export async function POST(req: Request) {

 const body = await req.json()

 const product = await prisma.product.create({
  data: body
 })

 return NextResponse.json(product)
}

export async function DELETE(req: Request) {

 const { id } = await req.json()

 const product = await prisma.product.findUnique({
  where: { id }
 })

 if (product?.image) {

  const filePath = path.join(
   process.cwd(),
   "public",
   product.image
  )

  if (fs.existsSync(filePath)) {
   fs.unlinkSync(filePath)
  }
 }

 await prisma.product.delete({
  where: { id }
 })

 return NextResponse.json({ success: true })
}