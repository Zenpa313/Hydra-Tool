"use client";
import React, { useState } from "react";

export default function CssFilterGenerator() {
    const [blur, setBlur] = useState(0);
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [grayscale, setGrayscale] = useState(0);

    const filterCss = `blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%)`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Blur ({blur}px)</label>
                    <input type="range" min="0" max="20" value={blur} onChange={e => setBlur(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Brightness ({brightness}%)</label>
                    <input type="range" min="0" max="200" value={brightness} onChange={e => setBrightness(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Contrast ({contrast}%)</label>
                    <input type="range" min="0" max="200" value={contrast} onChange={e => setContrast(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Grayscale ({grayscale}%)</label>
                    <input type="range" min="0" max="100" value={grayscale} onChange={e => setGrayscale(Number(e.target.value))} className="w-full" />
                </div>
                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl">filter: {filterCss};</div>
            </div>

            <div className="flex items-center justify-center p-8 bg-neutral-100 rounded-2xl border">
                <div style={{ filter: filterCss }} className="w-56 h-56 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-2xl shadow-xl flex items-center justify-center text-white font-extrabold text-lg">
                    Filter Preview
                </div>
            </div>
        </div>
    );
}
