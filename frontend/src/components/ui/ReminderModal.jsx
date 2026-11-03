import { useState } from "react";

export default function ReminderModal({ customer, onClose, onConfirm }) {
  const [template, setTemplate] = useState(customer?.daysLeft ? `${customer.daysLeft} days left` : "Expired");
  const [message, setMessage] = useState(() => createMessage(customer, template));

  if (!customer) return null;

  function selectTemplate(option) {
    setTemplate(option);
    setMessage(createMessage(customer, option));
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-[28px] bg-white p-8 shadow-2xl">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-2xl text-indigo-600">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
            </div>
            <div>
              
              <h2 className="text-xl font-bold text-slate-900">Send reminder</h2>
              <p className="text-sm text-slate-400">{customer.name} · {customer.phone}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-2xl text-slate-400 hover:text-slate-600">×</button>
        </div>

        <h3 className="mt-7 text-sm font-bold text-slate-600">Quick template</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {["7 days left", "3 days left", "1 day left", "Expired"].map((option) => (
            <button key={option} onClick={() => selectTemplate(option)} className={`rounded-full border px-4 py-2 text-sm font-semibold ${template === option ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}>
              {option}
            </button>
          ))}
        </div>

        <label className="mt-7 block text-sm font-bold text-slate-600">Message</label>
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} className="mt-3 h-28 w-full resize-none rounded-2xl border border-slate-200 p-4 text-sm leading-7 text-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />

        <div className="mt-7 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">Cancel</button>
          <button onClick={() => {
            navigator.clipboard?.writeText(message);
            onConfirm(message);
          }} className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">Copy message</button>
        </div>
      </div>
    </div>
  );
}

function createMessage(customer, template) {
  if (!customer) return "";
  return `Hi ${customer.name}, your TV subscription expires on ${customer.expires} (${template}). Please renew to keep your service running. Thank you!`;
}
