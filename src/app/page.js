"use client"
import FormLogin from "@/components/FormLogin"
import Navbar from "@/components/Navbar"
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState('');

  return (
    <>
      <Navbar username={username} />
      <div>
        <h3>Belajar Redux</h3>
        <p>Ini aplikasi sederhana</p>
      </div>
      <form>
        <FormLogin setUsername={setUsername} />
      </form>
    </>
  )
}
