"use client";
import React, { useState } from "react";

export default function AspectRatioGenerator() {
    const [ratio, setRatio] = useState("16/9");
    const [width, setWidth] = useState(320);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Common Aspect Ratios</label>
                <div className="grid grid-cols-4 gap-2">
                    {["16/9", "4/3", "1/1", "21/9", "9/16", "3/2"].map(r => (
                        <button
                            key={r}
                            onClick={() => setRatio(r)}
                            className={`p-2.5 rounded-xl text-xs font-bold border ${ratio === r ? "border-blue-600 bg-blue-50 text-blue-700" : "bg-white"}`}
                        >
                            {r}
                        </button>
                    ))}
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Preview Width ({width}px)</label>
                    <input type="range" min="150" max="450" value={width} onChange={e => setWidth(Number(e.target.value))} className="w-full" />
                </div>
                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl">aspect-ratio: {ratio};</div>
            </div>

            <div className="flex items-center justify-center p-8 bg-neutral-100 rounded-2xl border">
                <div style={{ aspectRatio: ratio, width: `${width}px` }} className="bg-blue-600 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-sm">
                    {ratio}
                </div>
            </div>
        </div>
    );
}
