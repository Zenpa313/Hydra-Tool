"use client";
import React, { useState } from "react";

export default function GlassmorphismGenerator() {
    const [blur, setBlur] = useState(16);
    const [opacity, setOpacity] = useState(0.25);
    const [borderOpacity, setBorderOpacity] = useState(0.3);

    const style = {
        background: `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
    };

    const cssRule = `background: rgba(255, 255, 255, ${opacity});\nbackdrop-filter: blur(${blur}px);\n-webkit-backdrop-filter: blur(${blur}px);\nborder: 1px solid rgba(255, 255, 255, ${borderOpacity});`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-xs font-bold text-neutral-500 mb-1">
                        <span>Blur</span>
                        <span>{blur}px</span>
                    </div>
                    <input type="range" min="0" max="40" value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-full" />
                </div>

                <div>
                    <div className="flex justify-between text-xs font-bold text-neutral-500 mb-1">
                        <span>Background Opacity</span>
                        <span>{Math.round(opacity * 100)}%</span>
                    </div>
                    <input type="range" min="0" max="1" step="0.05" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full" />
                </div>

                <div>
                    <div className="flex justify-between text-xs font-bold text-neutral-500 mb-1">
                        <span>Border Opacity</span>
                        <span>{Math.round(borderOpacity * 100)}%</span>
                    </div>
                    <input type="range" min="0" max="1" step="0.05" value={borderOpacity} onChange={(e) => setBorderOpacity(Number(e.target.value))} className="w-full" />
                </div>

                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl whitespace-pre-wrap">
                    {cssRule}
                </div>
            </div>

            <div className="relative rounded-2xl p-10 overflow-hidden min-h-[300px] flex items-center justify-center bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500">
                <div className="absolute w-32 h-32 bg-yellow-400 rounded-full top-6 left-6 blur-xl opacity-80" />
                <div className="absolute w-32 h-32 bg-cyan-400 rounded-full bottom-6 right-6 blur-xl opacity-80" />

                <div
                    style={style}
                    className="relative z-10 w-64 p-6 rounded-2xl shadow-xl text-white font-semibold text-center"
                >
                    <p className="text-lg font-bold">Frosted Glass</p>
                    <p className="text-xs text-white/80 mt-1">Modern UI Glassmorphism</p>
                </div>
            </div>
        </div>
    );
}
