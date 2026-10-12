"use client";
import React, { useState, useEffect } from "react";
export default function LoanCalculator() {
    const [amt, setAmt] = useState(250000);
    const [rate, setRate] = useState(5);
    const [years, setYears] = useState(30);
    const [monthly, setMonthly] = useState(0);

    useEffect(() => {
        const r = rate / 100 / 12;
        const n = years * 12;
        setMonthly((amt * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    }, [amt, rate, years]);

    return (
        <div className="space-y-4">
            <input type="number" className="w-full p-2 border rounded" value={amt} onChange={e => setAmt(Number(e.target.value))} />
            <div className="p-4 bg-gray-50 rounded">Monthly Payment: ${monthly.toFixed(2)}</div>
        </div>
    );
}
