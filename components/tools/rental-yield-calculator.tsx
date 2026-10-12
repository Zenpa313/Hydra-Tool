"use client";
import React, { useState } from "react";

export default function RentalYieldCalculator() {
    const [price, setPrice] = useState(300000);
    const [rent, setRent] = useState(1800);
    const [expenses, setExpenses] = useState(3600); // annual HOA, insurance, repairs

    const annualRent = rent * 12;
    const grossYield = price > 0 ? (annualRent / price) * 100 : 0;
    const netYield = price > 0 ? ((annualRent - expenses) / price) * 100 : 0;
    const annualNetIncome = annualRent - expenses;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Property Purchase Price ($)</label>
                    <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full p-3 border rounded-xl font-mono text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Expected Monthly Rent ($)</label>
                    <input type="number" value={rent} onChange={e => setRent(Number(e.target.value))} className="w-full p-3 border rounded-xl font-mono text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Annual Operating Expenses ($)</label>
                    <input type="number" value={expenses} onChange={e => setExpenses(Number(e.target.value))} className="w-full p-3 border rounded-xl font-mono text-sm" />
                    <p className="text-[11px] text-neutral-400 mt-1">Property management, maintenance, insurance, vacancy allowance.</p>
                </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between">
                <div className="space-y-4">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-1">Gross Rental Yield</span>
                        <span className="text-4xl font-black text-neutral-900 font-mono">{grossYield.toFixed(2)}%</span>
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Net Rental Yield (After Expenses)</span>
                        <span className="text-5xl font-black text-blue-600 font-mono">{netYield.toFixed(2)}%</span>
                    </div>
                </div>
                <div className="space-y-2 border-t border-neutral-200 pt-4 text-xs text-neutral-600">
                    <div className="flex justify-between"><span>Annual Gross Rent:</span><span className="font-mono font-bold">${annualRent.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span>Annual Net Cashflow:</span><span className="font-mono font-bold text-green-600">${annualNetIncome.toLocaleString()}</span></div>
                </div>
            </div>
        </div>
    );
}
