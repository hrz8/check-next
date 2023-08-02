import FormLogin from "@/components/FormLogin"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h3>Belajar Redux</h3>
        <p>Ini aplikasi sederhana</p>
      </div>
      <form>
        <FormLogin />
      </form>
    </>
  )
}
