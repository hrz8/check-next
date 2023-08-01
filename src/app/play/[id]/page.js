import Navbar from "@/components/Navbar"

export default function PlayGameById({ params }) {
  return (
    <>
      <Navbar />
      <h1>Playing Game with id: { params.id }</h1>
    </>
  )
}
