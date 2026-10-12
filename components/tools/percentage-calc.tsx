"use client";
import { useState } from "react";
export default function PercentageCalc() {
    const [part, setPart] = useState(0);
    const [total, setTotal] = useState(0);
    const result = total ? ((part / total) * 100).toFixed(2) : "0.00";
    return (
        <div className="space-y-4">
            <input type="number" placeholder="Part" className="w-full p-3 border rounded-xl" onChange={e => setPart(Number(e.target.value))} />
            <input type="number" placeholder="Total" className="w-full p-3 border rounded-xl" onChange={e => setTotal(Number(e.target.value))} />
            <div className="p-4 bg-gray-100 rounded-lg">Result: {result}%</div>
        </div>
    );
}