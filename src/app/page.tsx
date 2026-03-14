import { prisma } from "@/lib/prisma"
import ProductCard from "@/components/ProductCard"
import { Key } from "react"

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" }
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((p: { id: Key | null | undefined; name: string; price: number; image: any }) => (
        <ProductCard
          key={p.id}
          name={p.name}
          price={p.price}
          image={p.image || "/placeholder.png"}
        />
      ))}
    </div>
  )
}