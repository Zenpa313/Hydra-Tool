"use client";
import React, { useState } from "react";

export default function BillableHoursCalculator() {
    const [rate, setRate] = useState(65);
    const [hours, setHours] = useState(40);
    const [minutes, setMinutes] = useState(0);
    const [taxRate, setTaxRate] = useState(10);

    const totalHours = hours + (minutes / 60);
    const subtotal = totalHours * rate;
    const tax = (subtotal * taxRate) / 100;
    const total = subtotal + tax;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Hourly Rate ($)</label>
                    <input type="number" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm font-mono" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Hours</label>
                        <input type="number" value={hours} onChange={e => setHours(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm font-mono" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Minutes (0-59)</label>
                        <input type="number" min="0" max="59" value={minutes} onChange={e => setMinutes(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm font-mono" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Sales Tax / VAT (%)</label>
                    <input type="number" value={taxRate} onChange={e => setTaxRate(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm font-mono" />
                </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-1">Total Billable Amount</span>
                    <span className="text-5xl font-black text-blue-600 font-mono">${total.toFixed(2)}</span>
                </div>
                <div className="space-y-2 border-t border-neutral-200 pt-4 text-xs text-neutral-600">
                    <div className="flex justify-between"><span>Hours Worked:</span><span className="font-bold">{hours}h {minutes}m ({totalHours.toFixed(2)}h)</span></div>
                    <div className="flex justify-between"><span>Subtotal:</span><span className="font-mono font-bold">${subtotal.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Tax Amount ({taxRate}%):</span><span className="font-mono font-bold">${tax.toFixed(2)}</span></div>
                </div>
            </div>
        </div>
    );
}
