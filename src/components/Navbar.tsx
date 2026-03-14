export default function Navbar() {

 return (

 <nav className="bg-black text-white px-10 py-4 flex justify-between">

  <h1 className="text-xl font-bold">
   MyStore
  </h1>

  <div className="flex gap-6">

   <a href="/">Home</a>

   <a href="/admin/login">
    Admin
   </a>

  </div>

 </nav>

 )
}