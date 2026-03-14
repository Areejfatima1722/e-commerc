"use client"

import { useEffect, useState } from "react"

type Product = {
  id: string
  name: string
  price: number
  description: string
  image: string
}

export default function Dashboard() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File>()
  const [products, setProducts] = useState<Product[]>([])

  // Load products from API
  async function loadProducts() {
    const res = await fetch("/api/products")
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  // Add product
  async function handleSubmit(e: any) {
    e.preventDefault()
    if (!file) {
      alert("Please select an image")
      return
    }

    const formData = new FormData()
    formData.append("file", file)

    const upload = await fetch("/api/upload", { method: "POST", body: formData })
    const img = await upload.json()

    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({
        name,
        price: Number(price),
        description,
        image: img.path,
      }),
    })

    alert("Product Added")
    setName("")
    setPrice("")
    setDescription("")
    setFile(undefined)
    loadProducts()
  }

  // Delete product
  async function deleteProduct(id: string) {
    if (!confirm("Are you sure you want to delete this product?")) return

    await fetch("/api/products", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    })
    loadProducts()
  }

  return (
    <div className="max-w-3xl mx-auto space-y-10 py-10">
      {/* Add Product Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
        <h2 className="text-xl font-bold">Add Product</h2>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
        <button type="submit" className="bg-black text-white px-6 py-2 rounded">
          Add Product
        </button>
      </form>

      {/* Product List */}
      <div className="bg-white p-6 shadow rounded">
        <h2 className="text-xl font-bold mb-4">Product List</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="text-center">
                <td className="p-2 border">{p.name}</td>
                <td className="p-2 border">${p.price}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={3} className="p-2 text-center text-gray-500">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}