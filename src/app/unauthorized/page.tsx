import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center p-10 bg-white rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">🚫 Unauthorized</h1>
        <p className="text-gray-700">
          You do not have permission to access this page.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
