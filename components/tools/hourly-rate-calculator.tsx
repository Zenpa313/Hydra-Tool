"use client";
import React, { useState } from "react";

export default function HourlyRateCalculator() {
    const [targetIncome, setTargetIncome] = useState(85000);
    const [annualExpenses, setAnnualExpenses] = useState(12000);
    const [billableHoursPerWeek, setBillableHoursPerWeek] = useState(25);
    const [vacationWeeks, setVacationWeeks] = useState(4);
    const [taxRate, setTaxRate] = useState(25);

    const workingWeeks = 52 - vacationWeeks;
    const totalBillableHours = workingWeeks * billableHoursPerWeek;
    const grossNeeded = (targetIncome / (1 - taxRate / 100)) + annualExpenses;
    const hourlyRate = totalBillableHours > 0 ? grossNeeded / totalBillableHours : 0;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Target Net Annual Income ($)</label>
                    <input type="number" value={targetIncome} onChange={(e) => setTargetIncome(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Annual Business Expenses ($)</label>
                    <input type="number" value={annualExpenses} onChange={(e) => setAnnualExpenses(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Billable Hours / Week</label>
                        <input type="number" value={billableHoursPerWeek} onChange={(e) => setBillableHoursPerWeek(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Vacation Weeks / Year</label>
                        <input type="number" value={vacationWeeks} onChange={(e) => setVacationWeeks(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Estimated Tax Rate (%)</label>
                    <input type="number" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} className="w-full p-2.5 border rounded-xl text-sm" />
                </div>
            </div>

            <div className="flex flex-col justify-center bg-blue-50/60 border border-blue-100 rounded-2xl p-8 text-center space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Recommended Minimum Rate</span>
                <span className="text-5xl font-black text-neutral-900 font-mono">${hourlyRate.toFixed(2)} / hr</span>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                    Based on {totalBillableHours} billable hours/year to hit ${targetIncome.toLocaleString()} take-home income covering taxes and ${annualExpenses.toLocaleString()} overhead.
                </p>
            </div>
        </div>
    );
}
