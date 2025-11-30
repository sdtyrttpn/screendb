import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-gray-200 p-6">
      <h1 className="text-9xl font-extrabold text-yellow-400 drop-shadow-lg">404</h1>

      <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>

      <p className="text-gray-400 text-center mt-2 max-w-md">
        The page you're looking for doesn't exist. It may have been moved, deleted, or the URL might
        be incorrect.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-yellow-400 text-neutral-900 text-lg font-semibold rounded-md hover:bg-yellow-300 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
