import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function ListGames() {
  return (
    <>
      <Navbar />
      <h1>Game List</h1>

      <ul>
        <li><Link href={'/games/1'}>Game 1</Link></li>
        <li><Link href={'/games/2'}>Game 2</Link></li>
        <li><Link href={'/games/3'}>Game 3</Link></li>
        <li><Link href={'/games/4'}>Game 4</Link></li>
        <li><Link href={'/games/5'}>Game 5</Link></li>
      </ul>
    </>
  )
}
