"use client";
import React, { useState } from "react";

export default function TypographyScaleGenerator() {
    const [baseSize, setBaseSize] = useState(16);
    const [ratio, setRatio] = useState(1.25); // Major Third

    const steps = [
        { name: "sm", factor: 1 / ratio },
        { name: "base", factor: 1 },
        { name: "lg", factor: ratio },
        { name: "xl", factor: Math.pow(ratio, 2) },
        { name: "2xl", factor: Math.pow(ratio, 3) },
        { name: "3xl", factor: Math.pow(ratio, 4) },
    ];

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 p-4 bg-neutral-50 rounded-xl border">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Base Size ({baseSize}px)</label>
                    <input type="range" min="12" max="24" value={baseSize} onChange={e => setBaseSize(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Ratio Preset</label>
                    <select value={ratio} onChange={e => setRatio(Number(e.target.value))} className="w-full p-2 border rounded-lg text-sm">
                        <option value={1.125}>Major Second (1.125)</option>
                        <option value={1.2}>Minor Third (1.200)</option>
                        <option value={1.25}>Major Third (1.250)</option>
                        <option value={1.333}>Perfect Fourth (1.333)</option>
                        <option value={1.618}>Golden Ratio (1.618)</option>
                    </select>
                </div>
            </div>

            <div className="space-y-4">
                {steps.map(s => {
                    const px = Math.round(baseSize * s.factor);
                    const rem = (px / 16).toFixed(3);
                    return (
                        <div key={s.name} className="p-4 bg-white border rounded-xl flex items-baseline justify-between gap-4">
                            <span style={{ fontSize: `${px}px` }} className="font-bold text-neutral-900 truncate">
                                Text Sample ({s.name})
                            </span>
                            <span className="font-mono text-xs text-neutral-400 shrink-0">{px}px / {rem}rem</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
