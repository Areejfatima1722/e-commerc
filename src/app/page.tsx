import { prisma } from "@/lib/prisma"
import ProductCard from "@/components/ProductCard"

export default async function Home() {

  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" }
  })

  return (
    <main>

      {/* HERO */}
      <section className="text-center py-20 bg-linear-to-b from-white to-black-900">

        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Areej 👋
        </h1>

        <p className="text-black-400 max-w-xl mx-auto">
          I build modern websites using Next.js, Prisma & Tailwind CSS.
        </p>

      </section>

      {/* PRODUCTS */}
      <section className="p-10">

        <h2 className="text-2xl font-semibold mb-6">
          Latest Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              price={p.price}
              image={p.image}
            />
          ))}

        </div>

      </section>

    </main>
  )
}