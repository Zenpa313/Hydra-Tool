"use client";
import React, { useState, useEffect } from "react";

export default function DateDifference() {
    const today = new Date().toISOString().split("T")[0];
    const [start, setStart] = useState(today);
    const [end, setEnd] = useState(today);
    const [diff, setDiff] = useState<{ years: number; months: number; days: number; totalDays: number }>({ years: 0, months: 0, days: 0, totalDays: 0 });

    useEffect(() => {
        if (!start || !end) return;
        const d1 = new Date(start);
        const d2 = new Date(end);
        if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return;

        const early = d1 <= d2 ? d1 : d2;
        const late = d1 <= d2 ? d2 : d1;

        const totalMs = late.getTime() - early.getTime();
        const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24));

        let y = late.getFullYear() - early.getFullYear();
        let m = late.getMonth() - early.getMonth();
        let d = late.getDate() - early.getDate();

        if (d < 0) {
            m--;
            const prev = new Date(late.getFullYear(), late.getMonth(), 0).getDate();
            d += prev;
        }
        if (m < 0) {
            y--;
            m += 12;
        }

        setDiff({ years: y, months: m, days: d, totalDays });
    }, [start, end]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">First Date</label>
                    <input type="date" value={start} onChange={e => setStart(e.target.value)} className="w-full p-3 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Second Date</label>
                    <input type="date" value={end} onChange={e => setEnd(e.target.value)} className="w-full p-3 border rounded-xl text-sm" />
                </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">Duration Delta</span>
                    <div className="grid grid-cols-3 gap-2 text-center mb-4">
                        <div className="p-3 bg-white rounded-xl border"><span className="text-2xl font-bold">{diff.years}</span><p className="text-[10px] text-neutral-400 uppercase">Years</p></div>
                        <div className="p-3 bg-white rounded-xl border"><span className="text-2xl font-bold">{diff.months}</span><p className="text-[10px] text-neutral-400 uppercase">Months</p></div>
                        <div className="p-3 bg-white rounded-xl border"><span className="text-2xl font-bold">{diff.days}</span><p className="text-[10px] text-neutral-400 uppercase">Days</p></div>
                    </div>
                </div>
                <div className="pt-4 border-t border-neutral-200 text-center font-mono font-bold text-sm text-blue-600">
                    Total: {diff.totalDays.toLocaleString()} Calendar Days
                </div>
            </div>
        </div>
    );
}
