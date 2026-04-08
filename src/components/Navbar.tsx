import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-10 py-4 flex justify-between items-center border-b border-gray-800">

      <h1 className="text-xl font-bold tracking-wide">
        Areej Portfolio
      </h1>

      <div className="flex gap-8 text-sm font-medium">

        <Link href="/" className="hover:text-gray-400">
          Home
        </Link>

        <Link href="/about" className="hover:text-gray-400">
          About
        </Link>

        <Link href="/contact" className="hover:text-gray-400">
          Contact
        </Link>

        <Link href="/admin/login" className="bg-white text-black px-4 py-1 rounded">
          Admin
        </Link>

      </div>
    </nav>
  )
}