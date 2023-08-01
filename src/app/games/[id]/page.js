import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function GameDetail({ params }) {
  return (
    <>
      <Navbar />
      <h1>Detail of Game with id : {params.id}</h1>

      <Link href={`/play/${params.id}`}>Play</Link>
      <br />
      <Link href={`/games/${params.id}/leader-board`}>leader board</Link>
    </>
  )
}
