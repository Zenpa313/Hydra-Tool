"use client";
import { useState } from "react";

export default function Percentagecalc() {
    
    const [part, setPart] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const result = total !== 0 ? ((part / total) * 100).toFixed(2) : "0.00";
    return (
        <div className="space-y-4">
            <input type="number" placeholder="Part" className="w-full p-3 border rounded-lg" onChange={e => setPart(Number(e.target.value))} />
            <input type="number" placeholder="Total" className="w-full p-3 border rounded-lg" onChange={e => setTotal(Number(e.target.value))} />
            <div className="text-2xl font-bold text-blue-600">Result: {result}%</div>
        </div>
    );
}
