"use client";
import React, { useState, useEffect } from "react";

export default function BusinessDays() {
    const today = new Date().toISOString().split("T")[0];
    const [start, setStart] = useState(today);
    const [end, setEnd] = useState(today);
    const [result, setResult] = useState<{ businessDays: number; weekendDays: number; totalDays: number } | null>(null);

    useEffect(() => {
        if (!start || !end) return;
        const d1 = new Date(start);
        const d2 = new Date(end);
        d1.setHours(0, 0, 0, 0);
        d2.setHours(0, 0, 0, 0);

        const from = d1 <= d2 ? d1 : d2;
        const to = d1 <= d2 ? d2 : d1;

        let bDays = 0;
        let wDays = 0;
        let cur = new Date(from);

        while (cur <= to) {
            const day = cur.getDay();
            if (day === 0 || day === 6) {
                wDays++;
            } else {
                bDays++;
            }
            cur.setDate(cur.getDate() + 1);
        }

        const total = bDays + wDays;
        setResult({ businessDays: bDays, weekendDays: wDays, totalDays: total });
    }, [start, end]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Start Date</label>
                    <input type="date" value={start} onChange={e => setStart(e.target.value)} className="w-full p-3 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">End Date</label>
                    <input type="date" value={end} onChange={e => setEnd(e.target.value)} className="w-full p-3 border rounded-xl text-sm" />
                </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">Working Days (Mon - Fri)</span>
                    <span className="text-5xl font-black text-blue-600 font-mono">{result ? result.businessDays : 0}</span>
                </div>
                <div className="space-y-2 border-t border-neutral-200 pt-4 text-xs text-neutral-600">
                    <div className="flex justify-between"><span>Weekend Days:</span><span className="font-bold">{result ? result.weekendDays : 0}</span></div>
                    <div className="flex justify-between font-bold text-neutral-900"><span>Total Calendar Days:</span><span>{result ? result.totalDays : 0}</span></div>
                </div>
            </div>
        </div>
    );
}
