"use client";
import React, { useState, useEffect } from "react";

export default function LoanCalculator() {
    const [principal, setPrincipal] = useState(250000);
    const [rate, setRate] = useState(6.5);
    const [years, setYears] = useState(30);

    const r = rate / 100 / 12;
    const n = years * 12;
    const monthlyPayment = r > 0 ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : principal / n;
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - principal;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Loan Principal ($)</label>
                    <input type="number" value={principal} onChange={e => setPrincipal(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm font-mono" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Annual Interest Rate (%)</label>
                        <input type="number" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm font-mono" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Loan Term (Years)</label>
                        <input type="number" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm font-mono" />
                    </div>
                </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-1">Monthly Payment (Principal + Interest)</span>
                    <span className="text-4xl font-black text-blue-600 font-mono">${monthlyPayment.toFixed(2)}</span>
                </div>
                <div className="space-y-2 border-t border-neutral-200 pt-4 text-xs text-neutral-600">
                    <div className="flex justify-between"><span>Total Repayment:</span><span className="font-mono font-bold">${totalPayment.toFixed(2)}</span></div>
                    <div className="flex justify-between text-red-600 font-bold"><span>Total Interest:</span><span className="font-mono">${totalInterest.toFixed(2)}</span></div>
                </div>
            </div>
        </div>
    );
}
