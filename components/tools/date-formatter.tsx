"use client";
import React, { useState } from "react";

export default function DateFormatter() {
    const [dt, setDt] = useState(new Date().toISOString().slice(0, 16));
    const [copied, setCopied] = useState<string | null>(null);

    const d = new Date(dt);
    const valid = !isNaN(d.getTime());

    const formats = valid ? [
        { label: "ISO 8601", val: d.toISOString() },
        { label: "UTC String", val: d.toUTCString() },
        { label: "Local Date & Time", val: d.toLocaleString() },
        { label: "Full Date", val: d.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" }) },
        { label: "Short Date (YYYY-MM-DD)", val: d.toISOString().split("T")[0] },
        { label: "Unix Timestamp (Seconds)", val: Math.floor(d.getTime() / 1000).toString() },
        { label: "Unix Timestamp (Milliseconds)", val: d.getTime().toString() },
    ] : [];

    const copy = (val: string, label: string) => {
        navigator.clipboard.writeText(val);
        setCopied(label);
        setTimeout(() => setCopied(null), 1500);
    };

    return (
        <div className="space-y-6">
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">Select Date & Time</label>
                <input type="datetime-local" value={dt} onChange={e => setDt(e.target.value)} className="w-full p-3 border rounded-xl text-sm font-mono" />
            </div>

            <div className="space-y-2">
                {formats.map(f => (
                    <div key={f.label} className="p-3.5 bg-neutral-50 border rounded-xl flex items-center justify-between gap-4">
                        <div>
                            <span className="text-[11px] font-bold text-neutral-400 block">{f.label}</span>
                            <span className="font-mono text-sm font-semibold text-neutral-900">{f.val}</span>
                        </div>
                        <button onClick={() => copy(f.val, f.label)} className="px-3 py-1.5 bg-neutral-900 text-white rounded-lg text-xs font-bold hover:bg-neutral-800">
                            {copied === f.label ? "Copied!" : "Copy"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
