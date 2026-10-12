"use client";
import React, { useState } from "react";

export default function PropertyTaxCalculator() {
    const [homeValue, setHomeValue] = useState(350000);
    const [taxRate, setTaxRate] = useState(1.15); // %
    const [assessmentRatio, setAssessmentRatio] = useState(100); // %

    const assessedValue = (homeValue * assessmentRatio) / 100;
    const annualTax = (assessedValue * taxRate) / 100;
    const monthlyTax = annualTax / 12;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Estimated Home Market Value ($)</label>
                    <input type="number" value={homeValue} onChange={e => setHomeValue(Number(e.target.value))} className="w-full p-3 border rounded-xl font-mono text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Local Property Tax Rate (%)</label>
                    <input type="number" step="0.05" value={taxRate} onChange={e => setTaxRate(Number(e.target.value))} className="w-full p-3 border rounded-xl font-mono text-sm" />
                    <p className="text-[11px] text-neutral-400 mt-1">Average US property tax rate ranges from 0.5% to 2.5% depending on county.</p>
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Assessment Ratio (%)</label>
                    <input type="number" value={assessmentRatio} onChange={e => setAssessmentRatio(Number(e.target.value))} className="w-full p-3 border rounded-xl font-mono text-sm" />
                </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Estimated Annual Property Tax</span>
                    <span className="text-5xl font-black text-neutral-900 font-mono">${annualTax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div className="space-y-2 border-t border-neutral-200 pt-4 text-xs text-neutral-600">
                    <div className="flex justify-between"><span>Assessed Value:</span><span className="font-mono font-bold">${assessedValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></div>
                    <div className="flex justify-between font-bold text-neutral-900 text-sm"><span>Estimated Monthly Tax Escrow:</span><span className="font-mono text-blue-600">${monthlyTax.toFixed(2)}/mo</span></div>
                </div>
            </div>
        </div>
    );
}
