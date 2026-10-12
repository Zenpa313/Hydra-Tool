"use client";
import { useState } from "react";
export default function Compoundinterest() {
    
    const [p, setP] = useState(1000); const [r, setR] = useState(5); const [t, setT] = useState(10);
    const final = p * Math.pow((1 + r / 100), t);
    return (
        <div className="space-y-4">
            <input type="number" placeholder="Principal ($)" className="w-full p-3 border rounded" onChange={e => setP(Number(e.target.value))} />
            <input type="number" placeholder="Rate (%)" className="w-full p-3 border rounded" onChange={e => setR(Number(e.target.value))} />
            <input type="number" placeholder="Years" className="w-full p-3 border rounded" onChange={e => setT(Number(e.target.value))} />
            <div className="p-4 bg-gray-100 rounded-lg">Future Value: ${final.toFixed(2)}</div>
        </div>
    );
}
