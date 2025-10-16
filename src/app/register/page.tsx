import React from "react";
import Link from "next/link";

export default function Register() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex w-full max-w-4xl bg-white rounded shadow-md">
        {/* Left Side */}
        <div className="flex-1 p-10 flex flex-col justify-center">
          {/* Logo */}
          <div className="mb-6">
            <img src="/logo.svg" alt="Logo" className="h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-[#1C2A4A] font-sans">
            Register
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none text-black"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none text-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none text-black"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none text-black"
            />
            <button
              type="submit"
              className="w-full bg-[#56B4F7] text-white font-bold py-2 rounded hover:bg-[#2998e4] transition"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-center text-[#1C2A4A]">
            Do you already have an account?{" "}
            <Link
              href="/signin"
              className="text-[#56B4F7] hover:underline font-semibold"
            >
              Log In
            </Link>
          </div>
        </div>
        {/* Right Side - Illustration */}
        <div className="flex-1 flex items-center justify-center bg-white p-10">
          <img src="/logo.svg" alt="Big Logo" className="max-h-64" />
        </div>
      </div>
    </main>
  );
}
