"use client";
import React, { useState } from "react";

export default function SplitBillCalculator() {
    const [billAmount, setBillAmount] = useState(120);
    const [tipPercent, setTipPercent] = useState(15);
    const [numPeople, setNumPeople] = useState(4);

    const tipAmount = (billAmount * tipPercent) / 100;
    const totalBill = billAmount + tipAmount;
    const perPerson = numPeople > 0 ? totalBill / numPeople : 0;
    const tipPerPerson = numPeople > 0 ? tipAmount / numPeople : 0;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Total Bill ($)</label>
                    <input type="number" value={billAmount} onChange={(e) => setBillAmount(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Tip Percentage ({tipPercent}%)</label>
                    <div className="grid grid-cols-4 gap-2">
                        {[10, 15, 18, 20].map((t) => (
                            <button
                                key={t}
                                type="button"
                                onClick={() => setTipPercent(t)}
                                className={`py-2 rounded-xl text-xs font-bold border transition ${
                                    tipPercent === t ? "border-blue-600 bg-blue-50 text-blue-700" : "bg-white border-neutral-200"
                                }`}
                            >
                                {t}%
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Number of People</label>
                    <input type="number" min="1" value={numPeople} onChange={(e) => setNumPeople(Math.max(1, Number(e.target.value)))} className="w-full p-2.5 border rounded-xl text-sm" />
                </div>
            </div>

            <div className="flex flex-col justify-center bg-neutral-50 border border-neutral-200 rounded-2xl p-8 text-center space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Each Person Pays</span>
                <span className="text-5xl font-black text-blue-600 font-mono">${perPerson.toFixed(2)}</span>
                <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-500 flex justify-around font-medium">
                    <span>Total Tip: ${tipAmount.toFixed(2)}</span>
                    <span>Total Bill: ${totalBill.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}
