import React from "react";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex w-full max-w-5xl bg-white rounded shadow-md">
        {/* Left Side - Illustration */}
        <div className="flex-1 flex items-center justify-center bg-white p-10">
          <img src="/logo.svg" alt="Big Logo" className="max-h-80" />
        </div>
        {/* Right Side */}
        <div className="flex-1 p-10 flex flex-col justify-center">
          {/* Logo kecil */}
          <div className="mb-6 flex justify-start">
            <img src="/logo.svg" alt="Logo" className="h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-[#1C2A4A] font-sans text-left">
            Log In
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border rounded focus:outline-none text-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none text-black"
            />
            <div className="text-right text-sm text-[#1C2A4A] mb-2">
              <Link href="#" className="hover:underline">
                Forgot Password ?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#56B4F7] text-white font-bold py-2 rounded hover:bg-[#2998e4] transition"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}