import { Link } from "react-router";

export function Case2() {
  return (
    <div class="flex flex-col w-full h-screen items-center justify-center">
      <h1 class="font-bold text-5xl"> Case 2 Coming Soon...</h1>
      <Link to="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  )
}