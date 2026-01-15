import Link from "next/link"

const Welcome = () => {
  return (
    <main>
      Welcome
      <Link href={'/users'}>to user dashboard</Link>
    </main>
  )
}
export default Welcome