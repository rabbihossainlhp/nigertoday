"use client";

import { useState } from "react";
import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CustomerAvatar from "@/components/ui/CustomerAvatar";
import SearchInput from "@/components/ui/SearchInput";
import StatusBadge from "@/components/ui/StatusBadge";
import { expiredCustomers, filterCustomers } from "@/data/customers";
import { useCustomers } from "@/context/CustomerContext";
import RenewalModal from "@/components/ui/RenewalModal";
import ReminderModal from "@/components/ui/ReminderModal";

export default function ExpiredPage() {
  const { showToast, renewCustomer } = useCustomers();
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [modal, setModal] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCustomers = filterCustomers(expiredCustomers, searchQuery);

  return (
    <DashboardLayout>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Expired</h1>
            <p className="text-xs text-slate-500 mt-1">2 subscriptions have expired · Renew them or follow up[cite: 11]</p>
          </div>

          <SearchInput value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Expired Table Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3">Customer</th>
                  <th className="py-3 px-3">Phone</th>
                  <th className="py-3 px-3">Expired On</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((c, i) => (
                    <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-3 flex items-center gap-3">
                        <CustomerAvatar initials={c.initials} />
                        <div>
                          <Link href={`/customers/${c.initials.toLowerCase()}`} className="font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                            {c.name}
                          </Link>
                          <p className="text-[11px] text-slate-400">{c.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-3 text-slate-600 font-medium">{c.phone}</td>
                      <td className="py-4 px-3 text-slate-600 font-medium">{c.expiredOn}</td>
                      <td className="py-4 px-3">
                        <StatusBadge className="bg-rose-50 text-rose-700 border-rose-200" dot>{c.badge}</StatusBadge>
                      </td>
                      <td className="py-4 px-3 text-right space-x-2">
                        <button onClick={() => { setSelectedCustomer(c); setModal("renew"); }} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors shadow-xs">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                          Renew
                        </button>
                        <button onClick={() => { setSelectedCustomer(c); setModal("reminder"); }} className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors">
                          Message
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-8 text-center text-slate-400">
                      No expired customers found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {modal === "renew" && <RenewalModal customer={selectedCustomer} onClose={() => setModal(null)} onConfirm={(months) => { renewCustomer(selectedCustomer.id, months); setModal(null); }} />}
        {modal === "reminder" && <ReminderModal customer={selectedCustomer} onClose={() => setModal(null)} onConfirm={() => { showToast("Reminder ready", `Message copied for ${selectedCustomer.name}.`); setModal(null); }} />}
      </main>
    </DashboardLayout>
  );
}
