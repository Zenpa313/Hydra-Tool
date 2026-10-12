"use client";
import React, { useState } from "react";

export default function TransformGenerator() {
    const [rot, setRot] = useState(15);
    const [scale, setScale] = useState(1);
    const [skewX, setSkewX] = useState(0);

    const transformCss = `rotate(${rot}deg) scale(${scale}) skewX(${skewX}deg)`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Rotate ({rot}°)</label>
                    <input type="range" min="-180" max="180" value={rot} onChange={e => setRot(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Scale ({scale})</label>
                    <input type="range" min="0.5" max="1.5" step="0.1" value={scale} onChange={e => setScale(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Skew X ({skewX}°)</label>
                    <input type="range" min="-30" max="30" value={skewX} onChange={e => setSkewX(Number(e.target.value))} className="w-full" />
                </div>
                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl">transform: {transformCss};</div>
            </div>

            <div className="flex items-center justify-center p-16 bg-neutral-100 rounded-2xl border overflow-hidden">
                <div style={{ transform: transformCss }} className="w-36 h-36 bg-blue-600 rounded-2xl shadow-xl flex items-center justify-center text-white font-bold transition-all">
                    Transform
                </div>
            </div>
        </div>
    );
}
