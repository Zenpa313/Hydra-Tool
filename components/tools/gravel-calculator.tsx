"use client";
import React, { useState } from "react";

export default function GravelCalculator() {
    const [l, setL] = useState(20);
    const [w, setW] = useState(10);
    const [d, setD] = useState(4);
    const [density, setDensity] = useState(1.4);

    const volumeYards = (l * w * (d / 12)) / 27;
    const tons = volumeYards * density;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                    <div><label className="block text-xs font-bold text-neutral-500 uppercase">Len (ft)</label>
                    <input type="number" value={l} onChange={e => setL(Number(e.target.value))} className="w-full p-2 border rounded-xl"/></div>
                    <div><label className="block text-xs font-bold text-neutral-500 uppercase">Width (ft)</label>
                    <input type="number" value={w} onChange={e => setW(Number(e.target.value))} className="w-full p-2 border rounded-xl"/></div>
                    <div><label className="block text-xs font-bold text-neutral-500 uppercase">Depth (in)</label>
                    <input type="number" value={d} onChange={e => setD(Number(e.target.value))} className="w-full p-2 border rounded-xl"/></div>
                </div>
                <input type="number" step="0.1" value={density} onChange={e => setDensity(Number(e.target.value))} className="w-full p-2 border rounded-xl" />
            </div>
            <div className="bg-neutral-50 border rounded-2xl p-8 text-center flex flex-col justify-center">
                <span className="text-4xl font-black text-blue-600 font-mono">{tons.toFixed(2)} Tons</span>
                <span className="text-sm text-neutral-500">{volumeYards.toFixed(2)} Cubic Yards</span>
            </div>
        </div>
    );
}
