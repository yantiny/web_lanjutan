import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="Positivus Logo" className="w-12 h-8" />
        <h2 className="font-semibold text-3xl text-black">Positivus</h2>
      </div>

      {/* Tombol Register & Sign In */}
      <div className="flex gap-4">
        <Link href="/register">
          <button className="bg-transparent border border-[#000000] text-[#000000] px-6 py-1.5 rounded-md hover:bg-[#699EEE] hover:text-white transition hover:border-transparent">
            Register
          </button>
        </Link>
        <Link href="/signin">
          <button className="bg-[#699EEE] text-white px-6 py-1.5 rounded-md hover:bg-[#0046CC] transition">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
}
