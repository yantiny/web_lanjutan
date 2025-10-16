import React from "react";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col py-8 px-6">
        {/* Logo */}
        <div className="flex items-center mb-10">
          <img src="/logo.svg" alt="Positivus Logo" className="w-12 h-8 mr-2" />
          <span className="font-semibold text-2xl text-black">Positivus</span>
        </div>
        {/* Menu */}
        <nav className="flex-1 space-y-2">
          <button className="flex items-center gap-2 bg-[#56B4F7] text-white px-4 py-2 rounded font-semibold">
            <span className="material-icons">dashboard</span>
            Dashboard
          </button>
          <button className="flex items-center gap-2 text-black px-4 py-2 rounded hover:bg-gray-100">
            <span className="material-icons">school</span>
            Course
          </button>
          <button className="flex items-center gap-2 text-black px-4 py-2 rounded hover:bg-gray-100">
            <span className="material-icons">verified</span>
            Certificate
          </button>
        </nav>
        {/* Pengaturan & Logout */}
        <div className="mt-10 space-y-2">
          <button className="flex items-center gap-2 text-black px-4 py-2 rounded hover:bg-gray-100">
            <span className="material-icons">settings</span>
            Pengaturan
          </button>
          <button className="flex items-center gap-2 bg-[#56B4F7] text-white px-4 py-2 rounded font-semibold">
            <span className="material-icons">logout</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 px-12 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-bold text-3xl text-black">Dashboard</h1>
          <span className="material-icons text-4xl text-black">account_circle</span>
        </div>
        {/* Welcome Banner */}
        <div className="bg-[#56B4F7] rounded-lg p-6 flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-black mb-2">Good Day, Bukti!</h2>
            <p className="text-black">Ready start your day with Positivus?</p>
          </div>
          <img src="/dashboard-banner.png" alt="Banner" className="h-24" />
        </div>
        {/* Card Section */}
        <div className="flex gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-4 w-64 flex flex-col items-center">
            <img src="/dashboard-card.png" alt="Card" className="h-24 mb-2" />
            <span className="text-black">deskripsi</span>
          </div>
          {/* Tambahkan card lain jika perlu */}
        </div>
        {/* Kotak kosong */}
        <div className="flex gap-8">
          <div className="border rounded-lg h-24 w-64"></div>
          <div className="border rounded-lg h-24 w-64"></div>
          <div className="border rounded-lg h-24 w-64"></div>
        </div>
      </section>
    </main>
  );
}