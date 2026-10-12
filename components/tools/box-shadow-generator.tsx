"use client";
import React, { useState } from "react";

export default function BoxShadowGenerator() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(10);
    const [blur, setBlur] = useState(25);
    const [spread, setSpread] = useState(-5);
    const [color, setColor] = useState("#000000");
    const [opacity, setOpacity] = useState(0.15);
    const [inset, setInset] = useState(false);

    // Convert hex to rgba
    const hexToRgba = (hex: string, op: number) => {
        let clean = hex.replace("#", "");
        if (clean.length === 3) clean = clean.split("").map((c) => c + c).join("");
        const num = parseInt(clean, 16);
        return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${op})`;
    };

    const rgba = hexToRgba(color, opacity);
    const shadowCss = `${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px ${rgba}`;
    const cssRule = `box-shadow: ${shadowCss};`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="flex justify-between text-xs font-bold text-neutral-500 mb-1">
                            <span>X Offset</span>
                            <span>{x}px</span>
                        </div>
                        <input type="range" min="-50" max="50" value={x} onChange={(e) => setX(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <div className="flex justify-between text-xs font-bold text-neutral-500 mb-1">
                            <span>Y Offset</span>
                            <span>{y}px</span>
                        </div>
                        <input type="range" min="-50" max="50" value={y} onChange={(e) => setY(Number(e.target.value))} className="w-full" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="flex justify-between text-xs font-bold text-neutral-500 mb-1">
                            <span>Blur</span>
                            <span>{blur}px</span>
                        </div>
                        <input type="range" min="0" max="100" value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <div className="flex justify-between text-xs font-bold text-neutral-500 mb-1">
                            <span>Spread</span>
                            <span>{spread}px</span>
                        </div>
                        <input type="range" min="-50" max="50" value={spread} onChange={(e) => setSpread(Number(e.target.value))} className="w-full" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Color</label>
                        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full h-9 rounded-lg" />
                    </div>
                    <div>
                        <div className="flex justify-between text-xs font-bold text-neutral-500 mb-1">
                            <span>Opacity</span>
                            <span>{Math.round(opacity * 100)}%</span>
                        </div>
                        <input type="range" min="0" max="1" step="0.05" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full" />
                    </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                    <input type="checkbox" id="inset-toggle" checked={inset} onChange={(e) => setInset(e.target.checked)} className="rounded" />
                    <label htmlFor="inset-toggle" className="text-xs font-bold text-neutral-700">Inset Shadow</label>
                </div>

                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl break-all">
                    {cssRule}
                </div>
            </div>

            <div className="flex items-center justify-center bg-neutral-100/60 rounded-2xl p-12 border border-neutral-200">
                <div
                    style={{ boxShadow: shadowCss }}
                    className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center font-bold text-xs text-neutral-400"
                >
                    Preview
                </div>
            </div>
        </div>
    );
}
