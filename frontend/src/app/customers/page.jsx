"use client";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";
import { useCustomers } from "@/context/CustomerContext";
import RenewalModal from "@/components/ui/RenewalModal";
import ReminderModal from "@/components/ui/ReminderModal";

export default function CustomersPage() {
  const { customers, renewCustomer, showToast } = useCustomers();
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [modal, setModal] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = customers.filter((c) => {
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
      <Sidebar />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Customers</h1>
            <p className="text-xs text-slate-500 mt-1">
              {customers.length} customers {customers.length > 0 ? "· Manage subscriptions and renewals" : ""}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></span>
              <input
                type="text"
                placeholder="Search name, phone or email"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <Link href="/customers/new" className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold shadow-sm hover:bg-indigo-700">
              + Add Customer
            </Link>
          </div>
        </div>

        {/* If Customers List is Empty -> Show Empty State UI */}
        {customers.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-16 flex flex-col items-center justify-center text-center space-y-4 min-h-[600px]">
            <div className="w-14 h-14 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl shadow-xs">
              <svg
  className="h-6 w-6"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6 1a4 4 0 0 1 0 8m0-8a4 4 0 0 0 0-8"
  />
</svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">No customers yet</h3>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                Add your first customer to start tracking subscriptions and expiry dates.
              </p>
            </div>
            <Link
              href="/customers/new"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold shadow-sm transition-all"
            >
              + Add Customer
            </Link>
          </div>
        ) : (
          <>
            {/* Filter Tabs */}
            <div className="flex items-center gap-2">
              {["all", "active", "expiring", "expired"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-all ${
                    activeTab === tab ? "bg-slate-900 text-white shadow-xs" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {tab === "expiring" ? "Expiring soon" : tab} <span className="opacity-75 ml-1">({customers.filter(c => tab === 'all' || c.status.toLowerCase().includes(tab)).length})</span>
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 uppercase font-semibold">
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
                  {filtered.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-50">
                      <td className="py-4 px-3 flex items-center gap-3">
                        <span className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">{c.initials}</span>
                        <div>
                          <Link href={`/customers/${c.id}`} className="font-semibold text-slate-900 hover:text-indigo-600">{c.name}</Link>
                          <p className="text-[11px] text-slate-400">{c.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-3 text-slate-600 font-medium">{c.phone}</td>
                      <td className="py-4 px-3 text-slate-500">{c.startDate}</td>
                      <td className="py-4 px-3 text-slate-600">{c.duration} mo</td>
                      <td className="py-4 px-3 text-slate-600">{c.expires}</td>
                      <td className="py-4 px-3">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                          c.status === "Active" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
                          c.status === "Expiring soon" ? "bg-amber-100 text-amber-800 border border-amber-200" :
                          "bg-rose-50 text-rose-700 border border-rose-200"
                        }`}>
                          {c.status}
                        </span>
                      </td>
                      <td className="py-4 px-3 text-right space-x-2">
                        <button onClick={() => { setSelectedCustomer(c); setModal("reminder"); }} className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50">
                          Message
                        </button>
                        <button onClick={() => { setSelectedCustomer(c); setModal("renew"); }} className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-xs">
                          Renew
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
      {modal === "renew" && <RenewalModal customer={selectedCustomer} onClose={() => setModal(null)} onConfirm={(months) => { renewCustomer(selectedCustomer.id, months); setModal(null); }} />}
      {modal === "reminder" && <ReminderModal customer={selectedCustomer} onClose={() => setModal(null)} onConfirm={() => { showToast("Reminder ready", `Message copied for ${selectedCustomer.name}.`); setModal(null); }} />}
    </div>
  );
}