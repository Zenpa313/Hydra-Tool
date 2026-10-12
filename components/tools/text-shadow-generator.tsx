"use client";
import React, { useState } from "react";

export default function TextShadowGenerator() {
    const [x, setX] = useState(2);
    const [y, setY] = useState(4);
    const [blur, setBlur] = useState(8);
    const [color, setColor] = useState("#3b82f6");

    const shadowCss = `${x}px ${y}px ${blur}px ${color}`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">X Offset ({x}px)</label>
                        <input type="range" min="-20" max="20" value={x} onChange={e => setX(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Y Offset ({y}px)</label>
                        <input type="range" min="-20" max="20" value={y} onChange={e => setY(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Blur ({blur}px)</label>
                        <input type="range" min="0" max="30" value={blur} onChange={e => setBlur(Number(e.target.value))} className="w-full" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Color</label>
                    <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-full h-9 rounded-lg" />
                </div>
                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl">text-shadow: {shadowCss};</div>
            </div>

            <div className="flex items-center justify-center p-12 bg-neutral-50 rounded-2xl border">
                <h2 style={{ textShadow: shadowCss }} className="text-5xl font-black text-neutral-900 tracking-tight">
                    Shadow Effect
                </h2>
            </div>
        </div>
    );
}
