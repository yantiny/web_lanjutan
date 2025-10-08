import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-10">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="Positivus Logo" className="w-12 h-8" />
        <h2 className="font-semibold text-3xl text-black">Positivus</h2>
      </div>

      {/* Tombol Register & Sign In */}
      <div className="flex items-center space-x-3">
        <Link href="/register">
          <button className="border border-black text-black px-6 py-1.5 rounded-md hover:bg-[#D3D3D3] transition">
            Register
          </button>
        </Link>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Sign In
        </button>
      </div>
    </nav>
  );
}
