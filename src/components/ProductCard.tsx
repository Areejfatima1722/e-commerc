// components/ProductCard.tsx
'use client'

type Props = {
  name: string
  price: number
  image: string
}

export default function ProductCard({ name, price, image }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={image || "/placeholder.png"} // fallback if image is null
        className="w-full h-48 object-cover rounded"
        alt={name}
      />
      <h2 className="mt-2 font-semibold">{name}</h2>
      <p className="text-gray-600">${price}</p>
    </div>
  )
}