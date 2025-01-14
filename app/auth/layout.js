import Link from "next/link";

export default function SignUpLayout({ children }) {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-lg font-bold">
            HopAround
          </Link>
          <div className="flex space-x-4">
            <Link href="/auth/sign-in" className="text-white">
              Login
            </Link>
            <Link href="/auth/sign-up" className="text-white">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
}