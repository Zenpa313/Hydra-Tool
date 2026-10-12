"use client";
import React, { useState } from "react";

export default function AgencyPricingCalculator() {
    const [laborCost, setLaborCost] = useState(5000);
    const [overheadPercent, setOverheadPercent] = useState(20);
    const [profitMargin, setProfitMargin] = useState(30);

    const overheadAmount = (laborCost * overheadPercent) / 100;
    const totalCost = laborCost + overheadAmount;
    const quotePrice = profitMargin < 100 ? totalCost / (1 - profitMargin / 100) : totalCost * 2;
    const profitAmount = quotePrice - totalCost;
    const markupPercent = totalCost > 0 ? (profitAmount / totalCost) * 100 : 0;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Direct Labor Cost ($)</label>
                    <input type="number" value={laborCost} onChange={e => setLaborCost(Number(e.target.value))} className="w-full p-3 border rounded-xl text-sm font-mono" />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Overhead Rate (%)</label>
                    <input type="number" value={overheadPercent} onChange={e => setOverheadPercent(Number(e.target.value))} className="w-full p-3 border rounded-xl text-sm font-mono" />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Target Profit Margin (%)</label>
                    <input type="number" value={profitMargin} onChange={e => setProfitMargin(Number(e.target.value))} className="w-full p-3 border rounded-xl text-sm font-mono" />
                </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Recommended Quote Price</span>
                    <span className="text-5xl font-black text-neutral-900 font-mono">${quotePrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div className="space-y-2 border-t border-neutral-200 pt-4 text-xs font-medium text-neutral-600">
                    <div className="flex justify-between"><span>Direct Labor:</span><span className="font-mono font-bold">${laborCost.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Overhead Expense:</span><span className="font-mono font-bold">${overheadAmount.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Total Agency Cost:</span><span className="font-mono font-bold">${totalCost.toFixed(2)}</span></div>
                    <div className="flex justify-between text-green-600 font-bold"><span>Projected Net Profit:</span><span className="font-mono">${profitAmount.toFixed(2)}</span></div>
                    <div className="flex justify-between text-neutral-400"><span>Effective Markup:</span><span className="font-mono">{markupPercent.toFixed(1)}%</span></div>
                </div>
            </div>
        </div>
    );
}
