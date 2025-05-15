import { FaSadCry } from "react-icons/fa";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <FaSadCry size={150}/>
      <h1 className="text-6xl font-bold text-red-600">Oops that's not a page</h1>
      <p className="mt-4 text-lg text-gray-700">What are you looking for?
      </p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home
      </a>
    </div>
  );
}