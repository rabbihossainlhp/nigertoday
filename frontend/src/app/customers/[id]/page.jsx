"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/upload/bg_logo.png";

export default function CustomerDetailsPage({ params }) {
  const [copiedField, setCopiedField] = useState(null);
  
  // Modal States
  const [isRenewModalOpen, setIsRenewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  // Renewal Form State
  const [renewalDuration, setRenewalDuration] = useState(3); // 3, 6, or 12 months

  const customer = {
    name: "John Smith",
    initials: "JS",
    customerSince: "Apr 8, 2026",
    statusBadge: "Expiring · 3 days left",
    daysLeft: 3,
    startDate: "Jul 8, 2026",
    expiresDate: "Oct 8, 2026",
    duration: "3 months",
    phone: "+1 555 012 3456",
    email: "john@email.com",
    renewals: [
      { title: "Renewed for 3 months", period: "Jul 8, 2026 → Oct 8, 2026" },
      { title: "First subscription · 3 months", period: "Apr 8, 2026 → Jul 8, 2026" },
    ],
  };

  const calculateNewExpiry = (baseDateStr, months) => {
    const date = new Date(baseDateStr);
    date.setMonth(date.getMonth() + months);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const newExpiryDate = calculateNewExpiry("Oct 8, 2026", renewalDuration);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800 relative">
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
        <Link href="/customers" className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Customers
        </Link>

        {/* Header & Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-base shrink-0">
              {customer.initials}
            </span>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{customer.name}</h1>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  {customer.statusBadge}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Customer since {customer.customerSince}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors shadow-xs">
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
              Edit
            </button>
            <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-50 text-indigo-600 font-semibold text-xs hover:bg-indigo-100 transition-colors">
              <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
              Send Reminder
            </button>
            <button
              onClick={() => setIsRenewModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors shadow-xs"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              Renew Subscription
            </button>
          </div>
        </div>

        {/* Content Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Left Columns (Subscription & Renewal History) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
              <div>
                <h2 className="text-base font-bold text-slate-900">Subscription</h2>
                <p className="text-xs text-slate-400">Current plan details</p>
              </div>

              {/* Progress Bar Section */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-3xl font-black text-amber-600 tracking-tight">
                    {customer.daysLeft} days left
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    Expires {customer.expiresDate}
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full w-[95%]" />
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>{customer.startDate}</span>
                  <span>{customer.expiresDate}</span>
                </div>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-3 flex justify-between">
                  <span className="text-slate-500">Start date</span>
                  <span className="font-semibold text-slate-900">{customer.startDate}</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-slate-500">Duration</span>
                  <span className="font-semibold text-slate-900">{customer.duration}</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-slate-500">Expiration date</span>
                  <span className="font-semibold text-slate-900">{customer.expiresDate}</span>
                </div>
              </div>
            </div>

            {/* Renewal History Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">Renewal history</h2>
                <p className="text-xs text-slate-400">Every time this subscription was renewed</p>
              </div>

              <div className="space-y-3">
                {customer.renewals.map((r, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-100 bg-slate-50/50">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{r.title}</p>
                      <p className="text-[11px] text-slate-400">{r.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Contact & Delete Cards) */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <h2 className="text-base font-bold text-slate-900">Contact</h2>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-white rounded-lg text-slate-500 border border-slate-100 shadow-xs">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </span>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-semibold">Phone</p>
                      <p className="font-semibold text-slate-900">{customer.phone}</p>
                    </div>
                  </div>
                  <button onClick={() => copyToClipboard(customer.phone, "phone")} className="text-slate-400 hover:text-slate-600 p-1">
                    {copiedField === "phone" ? <span className="text-emerald-600 font-bold text-[10px]">Copied!</span> : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-white rounded-lg text-slate-500 border border-slate-100 shadow-xs">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </span>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-semibold">Email</p>
                      <p className="font-semibold text-slate-900">{customer.email}</p>
                    </div>
                  </div>
                  <button onClick={() => copyToClipboard(customer.email, "email")} className="text-slate-400 hover:text-slate-600 p-1">
                    {copiedField === "email" ? <span className="text-emerald-600 font-bold text-[10px]">Copied!</span> : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-3">
              <div>
                <h2 className="text-base font-bold text-slate-900">Delete customer</h2>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">Removes this customer and their subscription records. This cannot be undone.</p>
              </div>
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-colors shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                Delete customer
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ---------------- RENEW MODAL ---------------- */}
      {isRenewModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Renew subscription</h3>
                  <p className="text-xs text-slate-400">{customer.name}</p>
                </div>
              </div>
              <button onClick={() => setIsRenewModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-[11px] text-slate-400 font-medium">Current expiry</p>
                <p className="text-sm font-bold text-slate-900">Oct 8, 2026</p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">3 days left</span>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600">Renewal duration</label>
              <div className="grid grid-cols-3 gap-3">
                {[3, 6, 12].map((months) => (
                  <button
                    key={months}
                    onClick={() => setRenewalDuration(months)}
                    className={`border rounded-2xl p-3 flex items-center gap-2 text-left transition-all ${
                      renewalDuration === months ? "border-indigo-600 bg-indigo-50/40 ring-1 ring-indigo-600" : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${renewalDuration === months ? "border-indigo-600 bg-indigo-600" : "border-slate-300"}`}>
                      {renewalDuration === months && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span className="text-xs font-bold text-slate-900">{months} months</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-4 space-y-1">
              <p className="text-[11px] font-semibold text-indigo-600">New expiration date</p>
              <p className="text-2xl font-black text-indigo-700">{newExpiryDate}</p>
            </div>

            <p className="text-[11px] text-slate-400 text-center">Payment happens outside this app. Confirming only updates the customer record.</p>

            <div className="flex justify-end gap-3 pt-2">
              <button onClick={() => setIsRenewModalOpen(false)} className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50">Cancel</button>
              <button onClick={() => setIsRenewModalOpen(false)} className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm">Confirm renewal</button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- DELETE MODAL ---------------- */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-md p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                </div>
                <h3 className="text-base font-bold text-slate-900">Delete {customer.name}?</h3>
              </div>
              <button onClick={() => setIsDeleteModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              This permanently removes the customer and their subscription records. This cannot be undone.
            </p>

            <div className="flex justify-end gap-3 pt-2">
              <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50">Cancel</button>
              <button onClick={() => setIsDeleteModalOpen(false)} className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs shadow-sm">Delete customer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}