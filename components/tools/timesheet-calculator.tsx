"use client";
import React, { useState } from "react";

export default function TimesheetCalculator() {
    const [rate, setRate] = useState(45);
    const [days, setDays] = useState([
        { day: "Monday", hours: 8, breakMins: 30 },
        { day: "Tuesday", hours: 8, breakMins: 30 },
        { day: "Wednesday", hours: 8, breakMins: 30 },
        { day: "Thursday", hours: 8, breakMins: 30 },
        { day: "Friday", hours: 8, breakMins: 30 },
    ]);

    const updateDay = (idx: number, field: string, val: number) => {
        const copy = [...days];
        copy[idx] = { ...copy[idx], [field]: val };
        setDays(copy);
    };

    const totalNetHours = days.reduce((sum, d) => sum + Math.max(0, d.hours - d.breakMins / 60), 0);
    const totalPay = totalNetHours * rate;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-xl border">
                <span className="text-sm font-bold text-neutral-700">Hourly Pay Rate ($):</span>
                <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-32 p-2 border rounded-lg text-sm text-right font-bold"
                />
            </div>

            <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <table className="w-full text-left text-sm">
                    <thead className="bg-neutral-50 text-neutral-500 text-xs font-bold uppercase border-b border-neutral-200">
                        <tr>
                            <th className="p-3">Day</th>
                            <th className="p-3 text-center">Gross Hours</th>
                            <th className="p-3 text-center">Break (Mins)</th>
                            <th className="p-3 text-right">Net Hours</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                        {days.map((d, idx) => {
                            const net = Math.max(0, d.hours - d.breakMins / 60);
                            return (
                                <tr key={d.day}>
                                    <td className="p-3 font-semibold text-neutral-800">{d.day}</td>
                                    <td className="p-3 text-center">
                                        <input
                                            type="number"
                                            value={d.hours}
                                            onChange={(e) => updateDay(idx, "hours", Number(e.target.value))}
                                            className="w-16 p-1 border rounded text-center"
                                        />
                                    </td>
                                    <td className="p-3 text-center">
                                        <input
                                            type="number"
                                            value={d.breakMins}
                                            onChange={(e) => updateDay(idx, "breakMins", Number(e.target.value))}
                                            className="w-16 p-1 border rounded text-center"
                                        />
                                    </td>
                                    <td className="p-3 text-right font-mono font-bold">{net.toFixed(2)} hrs</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="p-6 bg-blue-50/70 border border-blue-100 rounded-2xl flex justify-between items-center">
                <div>
                    <span className="text-xs font-bold uppercase text-blue-600 block">Weekly Summary</span>
                    <span className="text-2xl font-black text-neutral-900">{totalNetHours.toFixed(2)} Total Hours</span>
                </div>
                <div className="text-right">
                    <span className="text-xs font-bold uppercase text-blue-600 block">Total Earnings</span>
                    <span className="text-3xl font-black text-blue-600 font-mono">${totalPay.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}
