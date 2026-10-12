"use client";
import React, { useState, useEffect } from "react";

export default function CalendarWeek() {
    const today = new Date().toISOString().split("T")[0];
    const [date, setDate] = useState(today);
    const [weekInfo, setWeekInfo] = useState<{ week: number; year: number } | null>(null);

    useEffect(() => {
        if (!date) return;
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        d.setDate(d.getDate() + 4 - (d.getDay() || 7));
        const yearStart = new Date(d.getFullYear(), 0, 1);
        const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
        setWeekInfo({ week: weekNo, year: d.getFullYear() });
    }, [date]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Select Date</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full p-3.5 border rounded-xl text-sm" />
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between text-center">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">ISO Calendar Week</span>
                    <span className="text-5xl font-black text-neutral-900 font-mono">
                        Week {weekInfo ? weekInfo.week : 0}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400 block mt-2">Year: {weekInfo ? weekInfo.year : "-"}</span>
                </div>
                <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-500">
                    Compliant with international ISO 8601 calendar numbering.
                </div>
            </div>
        </div>
    );
}
