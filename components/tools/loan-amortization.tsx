"use client";
import { useState } from "react";
export default function Loanamortization() {
    
    const [p, setP] = useState(100000); const [r, setR] = useState(5); const [n, setN] = useState(30);
    const monthlyRate = r / 100 / 12;
    const numPayments = n * 12;
    const payment = (p * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
    return (
        <div className="space-y-4">
            <input type="number" placeholder="Loan Amount" className="w-full p-3 border rounded" onChange={e => setP(Number(e.target.value))} />
            <input type="number" placeholder="Annual Rate (%)" className="w-full p-3 border rounded" onChange={e => setR(Number(e.target.value))} />
            <input type="number" placeholder="Years" className="w-full p-3 border rounded" onChange={e => setN(Number(e.target.value))} />
            <div className="p-4 bg-gray-100 rounded-lg">Monthly Payment: ${payment.toFixed(2)}</div>
        </div>
    );
}
