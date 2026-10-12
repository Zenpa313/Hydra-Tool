"use client";
import React, { useState } from "react";

export default function LoadingSpinnerGenerator() {
    const [size, setSize] = useState(48);
    const [color, setColor] = useState("#2563eb");
    const [speed, setSpeed] = useState(1);

    const css = `@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n.spinner {\n  width: ${size}px;\n  height: ${size}px;\n  border: 4px solid #e2e8f0;\n  border-top-color: ${color};\n  border-radius: 50%;\n  animation: spin ${speed}s linear infinite;\n}`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Color</label>
                    <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-full h-9 rounded-lg" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Size ({size}px)</label>
                    <input type="range" min="20" max="96" value={size} onChange={e => setSize(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Speed ({speed}s)</label>
                    <input type="range" min="0.4" max="2" step="0.1" value={speed} onChange={e => setSpeed(Number(e.target.value))} className="w-full" />
                </div>
                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl whitespace-pre-wrap">{css}</div>
            </div>

            <div className="flex items-center justify-center p-16 bg-neutral-50 rounded-2xl border">
                <div
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        border: "4px solid #e2e8f0",
                        borderTopColor: color,
                        borderRadius: "50%",
                        animation: `spin ${speed}s linear infinite`,
                    }}
                />
                <style dangerouslySetInnerHTML={{ __html: "@keyframes spin { to { transform: rotate(360deg); } }" }} />
            </div>
        </div>
    );
}
