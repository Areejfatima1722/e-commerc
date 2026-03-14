"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login(){

 const router = useRouter()

 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")

 async function handleSubmit(e:any){

  e.preventDefault()

  const res = await fetch(
   "/api/auth/login",
   {
    method:"POST",
    body:JSON.stringify({email,password})
   }
  )

  if(res.ok){
   router.push("/admin/dashboard")
  }

 }

 return(

 <form
  onSubmit={handleSubmit}
  className="max-w-md mx-auto space-y-4"
 >

 <input
  placeholder="Email"
  onChange={e=>setEmail(e.target.value)}
  className="border p-2 w-full"
/>

<input
 type="password"
 placeholder="Password"
 onChange={e=>setPassword(e.target.value)}
 className="border p-2 w-full"
/>

<button className="bg-black text-white px-6 py-2">
 Login
</button>

 </form>

 )
}