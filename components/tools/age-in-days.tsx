"use client";
import React, { useState, useEffect } from "react";

export default function AgeInDays() {
    const [birthDate, setBirthDate] = useState("2000-01-01");
    const [totalDays, setTotalDays] = useState<number | null>(null);

    useEffect(() => {
        if (!birthDate) {
            setTotalDays(null);
            return;
        }
        const birth = new Date(birthDate);
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        birth.setHours(0, 0, 0, 0);
        const diffMs = now.getTime() - birth.getTime();
        setTotalDays(Math.floor(diffMs / (1000 * 60 * 60 * 24)));
    }, [birthDate]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Date of Birth</label>
                <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full p-3.5 border border-neutral-300 rounded-xl text-sm font-semibold"
                />
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between text-center">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">Total Lived Days</span>
                    <span className="text-5xl font-black text-neutral-900 font-mono">
                        {totalDays !== null && totalDays >= 0 ? totalDays.toLocaleString() : "-"}
                    </span>
                    <span className="text-sm font-semibold text-neutral-400 block mt-2">days on Earth</span>
                </div>
                <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-500">
                    {totalDays !== null && totalDays >= 0 ? `Equivalent to approx ${(totalDays * 24).toLocaleString()} hours.` : ""}
                </div>
            </div>
        </div>
    );
}
