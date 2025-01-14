"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function SignUpLayout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from local storage or an API
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <div>
      <header className="bg-gray-700 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Welcome to HopAround</h1>
          {user ? (
            <div className="flex items-center space-x-4">
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span>{user.name}</span>
            </div>
          ) : (
            <Link href="/auth/sign-in" className="text-white">
              Login
            </Link>
          )}
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}