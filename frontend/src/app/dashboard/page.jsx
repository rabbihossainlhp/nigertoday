"use client";
import Link from "next/link";
import Image from "next/image";

const LOGO_SRC = "/upload/bg_logo.png";

export default function DashboardPage() {
  const expiringCustomers = [
    { initials: "JS", name: "John Smith", expires: "Oct 8", remaining: "3 days left", daysColor: "bg-amber-100 text-amber-800" },
    { initials: "MB", name: "Michael Brown", expires: "Oct 12", remaining: "7 days left", daysColor: "bg-amber-100 text-amber-800" },
    { initials: "DL", name: "David Lee", expires: "Oct 15", remaining: "10 days left", daysColor: "bg-amber-100 text-amber-800" },
    { initials: "PD", name: "Priya Das", expires: "Oct 15", remaining: "10 days left", daysColor: "bg-amber-100 text-amber-800" },
  ];

  const expiredCustomers = [
    { initials: "RH", name: "Robert Hall", status: "Expired 2 days ago" },
    { initials: "JC", name: "James Cole", status: "Expired 5 days ago" },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800">
      {/* ---------------- SIDEBAR ---------------- */}
      <aside className="w-64 bg-indigo-50 border-r border-slate-200 flex flex-col justify-between p-4 shrink-0">
        <div className="space-y-6">
          {/* Logo Placeholder */}
          <div className="px-2 py-2">
            <div className="relative w-24 h-24">
              <Image
                src={LOGO_SRC}
                alt="NigerToday TV Logo"
                fill
                className="object-contain object-left"
                onError={(e) => {
                  e.currentTarget.parentElement.innerHTML = `
                    <div class="flex items-center gap-1.5 font-bold text-xl text-blue-600">
                      <span>NigerToday</span>
                      <span class="bg-red-600 text-white text-xs px-1 py-0.5 rounded">TV</span>
                    </div>
                  `;
                }}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 text-sm font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-600 text-white shadow-sm font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Dashboard
            </Link>

            <Link
              href="/customers"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-200/60 transition-colors"
            >
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Customers
            </Link>

            <Link
              href="#"
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-200/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Expiring</span>
              </div>
              <span className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">4</span>
            </Link>

            <Link
              href="#"
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-200/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Expired</span>
              </div>
              <span className="bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">2</span>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-200/60 transition-colors"
            >
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </Link>
          </nav>
        </div>

        {/* User Info Bottom Bar */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
              AO
            </div>
            <div className="text-xs">
              <p className="font-semibold text-slate-800">Alex Owner</p>
              <p className="text-slate-500">Business owner</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </aside>

      {/* ---------------- MAIN CONTENT AREA ---------------- */}
      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Dashboard</h1>
            <p className="text-xs text-slate-500 mt-1">
              Monday, October 5, 2026 · Here is who needs your attention today
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search name, phone or email"
                className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>

            {/* Add Customer Button */}
            <button className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all">
              <span className="text-base font-normal leading-none">+</span> Add Customer
            </button>
          </div>
        </div>

        {/* Warning Alert Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-amber-900">
          <div className="flex items-center gap-2.5">
            <span className="text-amber-600 text-base font-bold">⚠️</span>
            <span>
              <strong className="font-semibold">6 customers need your attention</strong> — 4 expire within 10 days and 2 have already expired.
            </span>
          </div>
          <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 shadow-xs transition-colors shrink-0">
            Review now
          </button>
        </div>

        {/* Stat Overview Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="p-1.5 bg-slate-100 rounded-md">👥</span> Total customers
            </div>
            <div>
              <p className="text-3xl font-extrabold text-slate-900">30</p>
              <p className="text-[11px] text-slate-400 mt-1">All saved customers</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="p-1.5 bg-emerald-50 text-emerald-600 rounded-md">✓</span> Active
            </div>
            <div>
              <p className="text-3xl font-extrabold text-emerald-600">24</p>
              <p className="text-[11px] text-slate-400 mt-1">More than 10 days left</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="p-1.5 bg-amber-50 text-amber-600 rounded-md">🕒</span> Expiring soon
            </div>
            <div>
              <p className="text-3xl font-extrabold text-amber-500">4</p>
              <p className="text-[11px] text-slate-400 mt-1">Within the next 10 days</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="p-1.5 bg-rose-50 text-rose-600 rounded-md">⚠️</span> Expired
            </div>
            <div>
              <p className="text-3xl font-extrabold text-rose-600">2</p>
              <p className="text-[11px] text-slate-400 mt-1">Follow up to renew</p>
            </div>
          </div>
        </div>

        {/* Bottom Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Expiring Soon Table (Takes 2 Columns) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">Expiring Soon</h2>
              <p className="text-xs text-slate-400">Sorted by days left</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 uppercase tracking-wider font-semibold">
                    <th className="py-3 px-2">Customer</th>
                    <th className="py-3 px-2">Expires</th>
                    <th className="py-3 px-2">Remaining</th>
                    <th className="py-3 px-2 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {expiringCustomers.map((c, i) => (
                    <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-2 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                          {c.initials}
                        </span>
                        <span className="font-semibold text-slate-800">{c.name}</span>
                      </td>
                      <td className="py-3.5 px-2 text-slate-500">{c.expires}</td>
                      <td className="py-3.5 px-2">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${c.daysColor}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          {c.remaining}
                        </span>
                      </td>
                      <td className="py-3.5 px-2 text-right">
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 font-semibold text-xs transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                          Send Reminder
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recently Expired Sidebar (Takes 1 Column) */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">Recently Expired</h2>
                <p className="text-xs text-slate-400">Renew or follow up</p>
              </div>

              <div className="space-y-3">
                {expiredCustomers.map((c, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                        {c.initials}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-slate-800">{c.name}</p>
                        <p className="text-[11px] text-rose-500">{c.status}</p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                      Message
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-100">
              <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700">
                View all expired →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}