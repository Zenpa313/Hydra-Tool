"use client";
import React, { useState, useEffect } from "react";

export default function DaysUntil() {
    const nextYear = new Date().getFullYear() + 1;
    const [target, setTarget] = useState(`${nextYear}-01-01`);
    const [days, setDays] = useState<number | null>(null);

    useEffect(() => {
        if (!target) return;
        const t = new Date(target);
        const now = new Date();
        t.setHours(0, 0, 0, 0);
        now.setHours(0, 0, 0, 0);
        const diffMs = t.getTime() - now.getTime();
        setDays(Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
    }, [target]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Target Date</label>
                <input type="date" value={target} onChange={e => setTarget(e.target.value)} className="w-full p-3.5 border rounded-xl text-sm" />
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between text-center">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Days Countdown</span>
                    <span className="text-5xl font-black text-neutral-900 font-mono">
                        {days !== null ? (days >= 0 ? days : `${Math.abs(days)} days ago`) : "-"}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400 block mt-2">
                        {days !== null && days >= 0 ? "Remaining until target date" : "Target date has passed"}
                    </span>
                </div>
                <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-500">
                    Live dynamic day difference relative to your local browser clock.
                </div>
            </div>
        </div>
    );
}
