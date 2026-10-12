"use client";
import React, { useState } from "react";

export default function CssGridGenerator() {
    const [cols, setCols] = useState(3);
    const [gap, setGap] = useState(16);

    const cssCode = `display: grid;\ngrid-template-columns: repeat(${cols}, minmax(0, 1fr));\ngap: ${gap}px;`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Columns ({cols})</label>
                    <input type="range" min="1" max="6" value={cols} onChange={e => setCols(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Gap ({gap}px)</label>
                    <input type="range" min="4" max="32" value={gap} onChange={e => setGap(Number(e.target.value))} className="w-full" />
                </div>
                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl whitespace-pre-wrap">{cssCode}</div>
            </div>

            <div
                style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap: `${gap}px` }}
                className="p-8 bg-neutral-100 rounded-2xl border"
            >
                {[1, 2, 3, 4, 5, 6].map(n => (
                    <div key={n} className="h-20 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center">
                        Box {n}
                    </div>
                ))}
            </div>
        </div>
    );
}
