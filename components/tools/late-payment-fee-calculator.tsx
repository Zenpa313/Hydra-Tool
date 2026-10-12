"use client";
import React, { useState } from "react";

export default function LatePaymentCalculator() {
    const [amount, setAmount] = useState(2500);
    const [rate, setRate] = useState(8);
    const [days, setDays] = useState(45);
    const [flatFee, setFlatFee] = useState(50);

    const interest = (amount * rate * days) / (365 * 100);
    const totalFees = interest + flatFee;
    const totalDue = amount + totalFees;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Overdue Invoice Amount ($)</label>
                    <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm font-mono" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Annual Interest Rate (%)</label>
                        <input type="number" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm font-mono" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Days Past Due</label>
                        <input type="number" value={days} onChange={e => setDays(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm font-mono" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">One-time Flat Late Penalty ($)</label>
                    <input type="number" value={flatFee} onChange={e => setFlatFee(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm font-mono" />
                </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">Total Overdue Amount</span>
                    <span className="text-5xl font-black text-neutral-900 font-mono">${totalDue.toFixed(2)}</span>
                </div>
                <div className="space-y-2 border-t border-neutral-200 pt-4 text-xs text-neutral-600">
                    <div className="flex justify-between"><span>Original Balance:</span><span className="font-mono font-bold">${amount.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Accrued Interest ({days} days):</span><span className="font-mono font-bold text-red-600">${interest.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Flat Penalty:</span><span className="font-mono font-bold">${flatFee.toFixed(2)}</span></div>
                    <div className="flex justify-between border-t pt-2 font-bold text-neutral-900"><span>Total Extra Charges:</span><span className="font-mono">${totalFees.toFixed(2)}</span></div>
                </div>
            </div>
        </div>
    );
}
