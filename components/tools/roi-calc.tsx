"use client";
import { useState } from "react";
export default function Roicalc() {
    
    const [cost, setCost] = useState(1000); const [gain, setGain] = useState(1500);
    const roi = ((gain - cost) / cost) * 100;
    return (
        <div className="space-y-4">
            <input type="number" placeholder="Initial Cost ($)" className="w-full p-3 border rounded" onChange={e => setCost(Number(e.target.value))} />
            <input type="number" placeholder="Total Gain ($)" className="w-full p-3 border rounded" onChange={e => setGain(Number(e.target.value))} />
            <div className="p-4 bg-gray-100 rounded-lg">ROI: {roi.toFixed(2)}%</div>
        </div>
    );
}
