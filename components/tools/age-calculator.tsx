"use client";
import React, { useState, useEffect } from "react";

export default function AgeCalculator() {
    const [birthDate, setBirthDate] = useState("1995-06-15");
    const [age, setAge] = useState<{ years: number; months: number; days: number }>({ years: 0, months: 0, days: 0 });

    useEffect(() => {
        if (!birthDate) return;
        const now = new Date();
        const birth = new Date(birthDate);
        if (isNaN(birth.getTime())) return;

        let y = now.getFullYear() - birth.getFullYear();
        let m = now.getMonth() - birth.getMonth();
        let d = now.getDate() - birth.getDate();

        if (d < 0) {
            m--;
            const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            d += prevMonthDays;
        }
        if (m < 0) {
            y--;
            m += 12;
        }

        setAge({ years: y, months: m, days: d });
    }, [birthDate]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Select Your Date of Birth
                </label>
                <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full p-3.5 border border-neutral-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">Exact Chronological Age</span>
                    <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-sm">
                            <span className="text-3xl font-black text-blue-600 font-mono block">{age.years}</span>
                            <span className="text-xs font-semibold text-neutral-500 uppercase">Years</span>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-sm">
                            <span className="text-3xl font-black text-neutral-900 font-mono block">{age.months}</span>
                            <span className="text-xs font-semibold text-neutral-500 uppercase">Months</span>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-sm">
                            <span className="text-3xl font-black text-neutral-900 font-mono block">{age.days}</span>
                            <span className="text-xs font-semibold text-neutral-500 uppercase">Days</span>
                        </div>
                    </div>
                </div>
                <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-500 text-center">
                    Calculated accurately with leap year and calendar variations.
                </div>
            </div>
        </div>
    );
}
