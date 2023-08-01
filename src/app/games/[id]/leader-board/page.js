import Navbar from "@/components/Navbar"

export default function LeaderBoard({ params }) {
  return (
    <>
      <Navbar />
      <h1>This is leader board for game id : {params.id}</h1>
    </>
  )
}
