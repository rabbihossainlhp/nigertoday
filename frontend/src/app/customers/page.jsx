"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/upload/bg_logo.png";

export default function CustomersPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const customers = [
    { initials: "JS", name: "John Smith", email: "john@email.com", phone: "+1 555 012 3456", startDate: "Jul 8, 2026", duration: "3 mo", expires: "Oct 8", status: "Expiring soon", badge: "3 days left", badgeColor: "bg-amber-100 text-amber-800 border border-amber-200" },
    { initials: "MB", name: "Michael Brown", email: "michael@email.com", phone: "+1 555 013 7788", startDate: "Jul 12, 2026", duration: "3 mo", expires: "Oct 12", status: "Expiring soon", badge: "7 days left", badgeColor: "bg-amber-100 text-amber-800 border border-amber-200" },
    { initials: "SK", name: "Sarah Khan", email: "sarah@email.com", phone: "+1 555 019 2210", startDate: "Oct 5, 2026", duration: "3 mo", expires: "Jan 5, 2027", status: "Active", badge: "Active", badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
    { initials: "DL", name: "David Lee", email: "david@email.com", phone: "+1 555 014 6621", startDate: "Apr 15, 2026", duration: "6 mo", expires: "Oct 15", status: "Expiring soon", badge: "10 days left", badgeColor: "bg-amber-100 text-amber-800 border border-amber-200" },
    { initials: "EW", name: "Emma Wilson", email: "emma@email.com", phone: "+1 555 011 9034", startDate: "Jun 1, 2026", duration: "12 mo", expires: "Jun 1, 2027", status: "Active", badge: "Active", badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
    { initials: "RH", name: "Robert Hall", email: "robert@email.com", phone: "+1 555 017 4410", startDate: "Apr 3, 2026", duration: "6 mo", expires: "Oct 3", status: "Expired", badge: "2 days ago", badgeColor: "bg-rose-50 text-rose-700 border border-rose-200" },
    { initials: "JC", name: "James Cole", email: "james@email.com", phone: "+1 555 018 2965", startDate: "Jan 30, 2026", duration: "6 mo", expires: "Sep 30", status: "Expired", badge: "5 days ago", badgeColor: "bg-rose-50 text-rose-700 border border-rose-200" },
  ];

  // Filter logic based on tabs and search query
  const filteredCustomers = customers.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.email.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.phone.includes(searchQuery);
    
    if (activeTab === "active") return matchesSearch && c.status === "Active";
    if (activeTab === "expiring") return matchesSearch && c.status === "Expiring soon";
    if (activeTab === "expired") return matchesSearch && c.status === "Expired";
    return matchesSearch;
  });

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800">
      {/* ---------------- SIDEBAR ---------------- */}
      <aside className="w-64 bg-slate-100/70 border-r border-slate-200 flex flex-col justify-between p-4 shrink-0">
        <div className="space-y-6">
          <div className="px-2 py-2">
            <div className="relative w-24 h-24">
              <Image src={LOGO_SRC} alt="Logo" fill className="object-contain object-left" />
            </div>
          </div>

          <nav className="space-y-1 text-sm font-medium">
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-200/60 transition-colors">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              Dashboard
            </Link>

            <Link href="/customers" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-600 text-white shadow-sm font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              Customers
            </Link>

            <Link href="/expiring" className="flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-200/60 transition-colors">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
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
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Customers</h1>
            <p className="text-xs text-slate-500 mt-1">30 customers · Manage subscriptions and renewals</p>
          </div>

          <div className="flex items-center gap-3">
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
            <button className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all">
              + Add Customer
            </button>
          </div>
        </div>

        {/* Filter Pills / Tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeTab === "all" ? "bg-slate-900 text-white shadow-xs" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"}`}
          >
            All <span className="ml-1 opacity-75">30</span>
          </button>
          <button
            onClick={() => setActiveTab("active")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeTab === "active" ? "bg-slate-900 text-white shadow-xs" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"}`}
          >
            Active <span className="ml-1 opacity-75">24</span>
          </button>
          <button
            onClick={() => setActiveTab("expiring")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeTab === "expiring" ? "bg-slate-900 text-white shadow-xs" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"}`}
          >
            Expiring soon <span className="ml-1 opacity-75">4</span>
          </button>
          <button
            onClick={() => setActiveTab("expired")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeTab === "expired" ? "bg-slate-900 text-white shadow-xs" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"}`}
          >
            Expired <span className="ml-1 opacity-75">2</span>
          </button>
        </div>

        {/* Customer Table Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3">Customer</th>
                  <th className="py-3 px-3">Phone</th>
                  <th className="py-3 px-3">Start Date</th>
                  <th className="py-3 px-3">Duration</th>
                  <th className="py-3 px-3">Expires</th>
                  <th className="py-3 px-3">Status</th>
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

<Link
  href={`/customers/${c.initials.toLowerCase()}`}
  className="font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
>
  {c.name}
</Link>                          <p className="text-[11px] text-slate-400">{c.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-3 text-slate-600 font-medium">{c.phone}</td>
                      <td className="py-4 px-3 text-slate-500">{c.startDate}</td>
                      <td className="py-4 px-3 text-slate-600 font-medium">{c.duration}</td>
                      <td className="py-4 px-3 text-slate-600 font-medium">{c.expires}</td>
                      <td className="py-4 px-3">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${c.badgeColor}`}>
                          {c.status !== "Active" && <span className="w-1.5 h-1.5 rounded-full bg-current"></span>}
                          {c.badge}
                        </span>
                      </td>
                      <td className="py-4 px-3 text-right space-x-2">
                        {c.status === "Expired" ? (
                          <>
                            <button className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-700 shadow-xs transition-colors">Renew</button>
                            <button className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors">Message</button>
                          </>
                        ) : (
                          <>
                            <button className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors">Message</button>
                            <button className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors">Renew</button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-8 text-center text-slate-400">
                      No customers found matching your filter or search query.
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