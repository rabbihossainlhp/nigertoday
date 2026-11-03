import { useState } from "react";

export default function RenewalModal({ customer, onClose, onConfirm }) {
  const [months, setMonths] = useState(3);

  if (!customer) return null;

  const expiry = new Date(customer.expiryDate || customer.expires);
  expiry.setMonth(expiry.getMonth() + months);
  const newExpiry = expiry.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-[28px] bg-white p-8 shadow-2xl">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-2xl text-indigo-600">↻</div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Renew subscription</h2>
              <p className="text-sm text-slate-400">{customer.name}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-2xl text-slate-400 hover:text-slate-600">×</button>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-5">
          <p className="text-sm text-slate-400">Current expiry</p>
          <p className="text-lg font-bold text-slate-900">{customer.expires}</p>
        </div>

        <h3 className="mt-7 text-sm font-bold text-slate-600">Renewal duration</h3>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {[3, 6, 12].map((option) => (
            <button
              key={option}
              onClick={() => setMonths(option)}
              className={`rounded-2xl border p-4 text-left text-sm font-semibold ${
                months === option
                  ? "border-indigo-600 bg-indigo-50 text-slate-900 ring-1 ring-indigo-600"
                  : "border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span className={`mr-2 inline-block h-4 w-4 rounded-full border align-middle ${months === option ? "border-4 border-indigo-600" : "border-slate-300"}`} />
              {option} months
            </button>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5">
          <p className="text-sm font-bold text-indigo-600">New expiration date</p>
          <p className="mt-2 text-3xl font-black text-indigo-700">{newExpiry}</p>
        </div>

        <p className="mt-7 text-center text-sm text-slate-400">
          Payment happens outside this app. Confirming only updates the customer record.
        </p>

        <div className="mt-8 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">Cancel</button>
          <button onClick={() => onConfirm(months)} className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">Confirm renewal</button>
        </div>
      </div>
    </div>
  );
}
