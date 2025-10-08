import Navbar from "./Navbar";
import Link from "next/link"; // Tambahkan import Link

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-10 md:py-20">
        {/* Left Content */}
        <div className="max-w-lg space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1C2A4A]">
            It’s <span className="text-[#699EEE]">Time</span>{" "}
            <span className="text-[#1C2A4A]">to</span>{" "}
            <span className="text-[#699EEE]">Grow</span> <br /> with{" "}
            <span className="text-[#699EEE]">Positivus</span>
          </h1>
          <p className="text-[#4B5563]">
            At Positivus, we are here to guide your learning journey with a fun,
            flexible, and meaningful approach.
          </p>
          <Link href="/register">
            <button className="bg-[#699EEE] text-white px-12 py-1.5 rounded-md hover:bg-[#0046CC] transition">
              Register
            </button>
          </Link>
        </div>

        {/* Right Illustration */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/gambar-1.png"
            alt="E-learning Illustration"
            className="w-200 h-100"
          />
        </div>
      </section>
    </main>
  );
}
