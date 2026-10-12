"use client";
import React, { useState } from "react";

export default function HvacCalculator() {
    const [sqft, setSqft] = useState(1000);
    const [ceil, setCeil] = useState(8);
    const [insulation, setInsulation] = useState("average");

    let btu = sqft * 25; // Base
    if (insulation === "poor") btu *= 1.2;
    if (insulation === "good") btu *= 0.8;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <input type="number" value={sqft} onChange={e => setSqft(Number(e.target.value))} className="w-full p-2 border rounded-xl" placeholder="Sqft"/>
                <select value={insulation} onChange={e => setInsulation(e.target.value)} className="w-full p-2 border rounded-xl">
                    <option value="poor">Poor Insulation</option>
                    <option value="average">Average Insulation</option>
                    <option value="good">Good Insulation</option>
                </select>
            </div>
            <div className="p-8 bg-blue-50 rounded-2xl border text-center text-4xl font-black text-blue-700">
                {Math.round(btu / 1000) * 1000} BTU
            </div>
        </div>
    );
}
