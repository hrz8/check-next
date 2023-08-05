import FormLogin from "@/components/FormLogin"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h3>Belajar Redux</h3>
        <p>Ini aplikasi sederhana</p>

        <Link href={'/profile'}>Profile</Link>
      </div>
      <form>
        <FormLogin />
      </form>
    </>
  )
}
