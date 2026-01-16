import Link from "next/link"

const Welcome = () => {
  return (
    <main>
      Welcome
      <Link className="text-blue-500 hover:underline" href={'/users'}>go to user dashboard</Link>
    </main>
  )
}
export default Welcome