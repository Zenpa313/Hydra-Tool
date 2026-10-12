"use client";
import React, { useState } from "react";

export default function SpacingScaleGenerator() {
    const [baseUnit, setBaseUnit] = useState(4);
    const steps = [1, 2, 3, 4, 6, 8, 12, 16, 24, 32];

    return (
        <div className="space-y-6">
            <div className="p-4 bg-neutral-50 rounded-xl border flex items-center justify-between">
                <span className="text-sm font-bold text-neutral-700">Base Grid Unit: {baseUnit}px</span>
                <div className="flex gap-2">
                    {[4, 8].map(u => (
                        <button
                            key={u}
                            onClick={() => setBaseUnit(u)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${baseUnit === u ? "bg-blue-600 text-white" : "bg-white"}`}
                        >
                            {u}px Grid
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                {steps.map(step => {
                    const px = step * baseUnit;
                    return (
                        <div key={step} className="flex items-center gap-4 p-2 bg-white border rounded-lg text-xs font-mono">
                            <span className="w-16 font-bold text-neutral-700">{step} ({px}px)</span>
                            <div style={{ width: `${Math.min(px * 4, 300)}px` }} className="h-4 bg-blue-500 rounded" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
