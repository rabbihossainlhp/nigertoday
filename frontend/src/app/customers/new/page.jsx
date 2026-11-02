"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/upload/bg_logo.png";

export default function AddCustomerPage() {
  const [fullName, setFullName] = useState("Sarah Khan");
  const [phoneNumber, setPhoneNumber] = useState("+1 555 019 2210");
  const [email, setEmail] = useState("sarah@email.com");
  const [startDate, setStartDate] = useState("2026-10-05");
  const [duration, setDuration] = useState(3); // duration in months (3, 6, 12)

  // Calculate dynamic expiry date based on start date + duration
  const getCalculatedExpiry = (start, months) => {
    const date = new Date(start || Date.now());
    date.setMonth(date.getMonth() + months);
    return date;
  };

  const expiryDate = getCalculatedExpiry(startDate, duration);
  
  const formatDateString = (dateObj) => {
    return dateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const calculateDaysLeft = (targetDate) => {
    const diffTime = targetDate.getTime() - new Date().getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const daysLeft = calculateDaysLeft(expiryDate);

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
      <main className="flex-1 p-8 overflow-y-auto space-y-6">
        {/* Back Link */}
        <Link href="/customers" className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-500 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Customers
        </Link>

        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Add Customer</h1>
          <p className="text-xs text-slate-500 mt-1">Save a customer and their subscription. The expiry date is worked out for you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Main Form Container (Takes 2 Columns) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-xs p-6 lg:p-8 space-y-8">
            {/* Customer Information */}
            <div className="space-y-4">
              <h2 className="text-base font-bold text-slate-900">Customer information</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Full name</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    </span>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-slate-900 text-sm transition-all bg-slate-50/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Phone number</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </span>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-slate-900 text-sm transition-all bg-slate-50/30"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">Email</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-slate-900 text-sm transition-all bg-slate-50/30"
                  />
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Subscription Settings */}
            <div className="space-y-4">
              <h2 className="text-base font-bold text-slate-900">Subscription</h2>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">Subscription start date</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </span>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none text-slate-900 text-sm transition-all bg-slate-50/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">Subscription duration</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* 3 Months Option */}
                  <label
                    onClick={() => setDuration(3)}
                    className={`cursor-pointer border rounded-2xl p-4 flex items-center gap-3 transition-all ${
                      duration === 3
                        ? "border-indigo-600 bg-indigo-50/40 ring-1 ring-indigo-600"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${duration === 3 ? "border-indigo-600 bg-indigo-600" : "border-slate-300"}`}>
                      {duration === 3 && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">3 months</p>
                      <p className="text-[11px] text-slate-400">Ends {formatDateString(getCalculatedExpiry(startDate, 3))}</p>
                    </div>
                  </label>

                  {/* 6 Months Option */}
                  <label
                    onClick={() => setDuration(6)}
                    className={`cursor-pointer border rounded-2xl p-4 flex items-center gap-3 transition-all ${
                      duration === 6
                        ? "border-indigo-600 bg-indigo-50/40 ring-1 ring-indigo-600"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${duration === 6 ? "border-indigo-600 bg-indigo-600" : "border-slate-300"}`}>
                      {duration === 6 && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">6 months</p>
                      <p className="text-[11px] text-slate-400">Ends {formatDateString(getCalculatedExpiry(startDate, 6))}</p>
                    </div>
                  </label>

                  {/* 12 Months Option */}
                  <label
                    onClick={() => setDuration(12)}
                    className={`cursor-pointer border rounded-2xl p-4 flex items-center gap-3 transition-all ${
                      duration === 12
                        ? "border-indigo-600 bg-indigo-50/40 ring-1 ring-indigo-600"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${duration === 12 ? "border-indigo-600 bg-indigo-600" : "border-slate-300"}`}>
                      {duration === 12 && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">12 months</p>
                      <p className="text-[11px] text-slate-400">Ends {formatDateString(getCalculatedExpiry(startDate, 12))}</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <Link href="/customers" className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors">
                Cancel
              </Link>
              <button
                type="button"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-700 shadow-xs transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                Add Customer
              </button>
            </div>
          </div>

          {/* Right Side: Subscription Summary Box (Takes 1 Column) */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
            <h2 className="text-base font-bold text-slate-900">Subscription summary</h2>

            <div className="space-y-4 text-xs">
              <div className="flex justify-between items-center text-slate-500">
                <span>Start date</span>
                <span className="font-semibold text-slate-900">{formatDateString(new Date(startDate))}</span>
              </div>

              <div className="flex justify-between items-center text-slate-500">
                <span>Duration</span>
                <span className="font-semibold text-slate-900">{duration} months</span>
              </div>
            </div>

            {/* Calculated Expiration Card */}
            <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-5 space-y-1">
              <p className="text-[11px] font-semibold text-indigo-600">Expiration date</p>
              <p className="text-2xl font-black text-indigo-700">{formatDateString(expiryDate)}</p>
              <p className="text-[10px] text-indigo-400 font-medium">Calculated automatically</p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500 font-medium">Status after saving</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Active · {daysLeft} days left
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}