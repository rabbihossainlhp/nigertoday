"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/upload/bg_logo.png";

export default function ExpiringSoonPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const expiringCustomers = [
    { initials: "JS", name: "John Smith", email: "john@email.com", phone: "+1 555 012 3456", expires: "Oct 8", daysLeft: 3, badge: "3 days left", category: "1-3" },
    { initials: "MB", name: "Michael Brown", email: "michael@email.com", phone: "+1 555 013 7788", expires: "Oct 12", daysLeft: 7, badge: "7 days left", category: "4-7" },
    { initials: "DL", name: "David Lee", email: "david@email.com", phone: "+1 555 014 6621", expires: "Oct 15", daysLeft: 10, badge: "10 days left", category: "8-10" },
    { initials: "PD", name: "Priya Das", email: "priya@email.com", phone: "+1 555 016 8802", expires: "Oct 15", daysLeft: 10, badge: "10 days left", category: "8-10" },
  ];

  // Filter customers based on range tabs and search box
  const filteredCustomers = expiringCustomers.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phone.includes(searchQuery);

    if (activeTab === "1-3") return matchesSearch && c.category === "1-3";
    if (activeTab === "4-7") return matchesSearch && c.category === "4-7";
    if (activeTab === "8-10") return matchesSearch && c.category === "8-10";
    return matchesSearch;
  });

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800">
      {/* ---------------- SIDEBAR ---------------- */}
      <aside className="w-64 bg-slate-100/70 border-r border-slate-200 flex flex-col justify-between p-4 shrink-0">
        <div className="space-y-6">
          <div className="px-2 py-2">
            <div className="relative w-36 h-14">
              <Image src={LOGO_SRC} alt="Logo" fill className="object-contain object-left" />
            </div>
          </div>

          <nav className="space-y-1 text-sm font-medium">
            <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-200/60 transition-colors">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              Dashboard
            </Link>

            <Link href="/customers" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-200/60 transition-colors">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              Customers
            </Link>

            <Link href="/expiring" className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-indigo-600 text-white shadow-sm font-semibold">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Expiring</span>
              </div>
              <span className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">4</span>
            </Link>

            <Link href="/expired" className="flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-200/60 transition-colors">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                <span>Expired</span>
              </div>
              <span className="bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">2</span>
            </Link>

            <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-200/60 transition-colors">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/></svg>
              Settings
            </Link>
          </nav>
        </div>

        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">AO</div>
            <div className="text-xs">
              <p className="font-semibold text-slate-800">Alex Owner</p>
              <p className="text-slate-500">Business owner</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-slate-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg></button>
        </div>
      </aside>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Expiring Soon</h1>
            <p className="text-xs text-slate-500 mt-1">4 subscriptions expire within the next 10 days</p>
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </span>
            <input
              type="text"
              placeholder="Search name, phone or email"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Filter Pills / Tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === "all"
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            All <span className="ml-1 opacity-80">4</span>
          </button>
          <button
            onClick={() => setActiveTab("1-3")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === "1-3"
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            1–3 days <span className="ml-1 opacity-80">1</span>
          </button>
          <button
            onClick={() => setActiveTab("4-7")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === "4-7"
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            4–7 days <span className="ml-1 opacity-80">1</span>
          </button>
          <button
            onClick={() => setActiveTab("8-10")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === "8-10"
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            8–10 days <span className="ml-1 opacity-80">2</span>
          </button>
        </div>

        {/* Expiring Soon Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3">Customer</th>
                  <th className="py-3 px-3">Phone</th>
                  <th className="py-3 px-3">Expires</th>
                  <th className="py-3 px-3">Remaining</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((c, i) => (
                    <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-3 flex items-center gap-3">
                        <span className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs shrink-0">
                          {c.initials}
                        </span>
                        <div>
                          <Link href={`/customers/${c.initials.toLowerCase()}`} className="font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                            {c.name}
                          </Link>
                          <p className="text-[11px] text-slate-400">{c.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-3 text-slate-600 font-medium">{c.phone}</td>
                      <td className="py-4 px-3 text-slate-600 font-medium">{c.expires}</td>
                      <td className="py-4 px-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          {c.badge}
                        </span>
                      </td>
                      <td className="py-4 px-3 text-right space-x-2">
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-600 font-semibold text-xs hover:bg-indigo-100 transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                          Send Reminder
                        </button>
                        <button className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors">
                          Renew
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-8 text-center text-slate-400">
                      No expiring subscriptions found for this selection.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}