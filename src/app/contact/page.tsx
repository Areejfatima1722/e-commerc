"use client"

import { useState } from "react"

export default function Contact() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const sendMessage = async () => {

    const res = await fetch("/api/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({name,email,message})
    })

    if(res.ok){
      alert("Message Sent ✅")
      setName("")
      setEmail("")
      setMessage("")
    }

  }

  return (
    <div className="flex justify-center items-center min-h-screen">

      <div className="bg-white-900 p-10 rounded-lg w-100 shadow-lg">

        <h1 className="text-2xl mb-6 font-semibold">
          Contact Me
        </h1>

        <input
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="w-full mb-4 p-3 text-blue rounded"
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full mb-4 p-3 text-blue rounded"
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          className="w-full mb-4 p-3 text-blue rounded"
        />

        <button
          onClick={sendMessage}
          className="bg-blue text-black w-full py-2 rounded font-semibold hover:bg-gray-200"
        >
          Send Message
        </button>

      </div>

    </div>
  )
}