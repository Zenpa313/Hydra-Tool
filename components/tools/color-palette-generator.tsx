"use client";
import React, { useState } from "react";

export default function ColorPaletteGenerator() {
    const [palettes, setPalettes] = useState([
        ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],
        ["#03071e", "#370617", "#6a040f", "#9d0208", "#d00000"],
        ["#7400b8", "#6930c3", "#5e60ce", "#4ea8de", "#48bfe3"],
        ["#007f5f", "#2b9348", "#55a630", "#80b918", "#aacc00"]
    ]);
    const [selected, setSelected] = useState(0);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {palettes.map((p, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelected(idx)}
                        className={`p-2 rounded-xl border flex overflow-hidden h-14 ${selected === idx ? "border-blue-600 ring-2 ring-blue-500/20" : "border-neutral-200"}`}
                    >
                        {p.map(c => <span key={c} style={{ backgroundColor: c }} className="flex-1 h-full" />)}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-5 gap-3">
                {palettes[selected].map(c => (
                    <div key={c} className="space-y-2 text-center">
                        <div style={{ backgroundColor: c }} className="h-40 rounded-2xl shadow-sm" />
                        <span className="font-mono text-xs font-bold text-neutral-800">{c}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
