"use client";
import React, { useState } from "react";

export default function GradientGenerator() {
    const [color1, setColor1] = useState("#3b82f6");
    const [color2, setColor2] = useState("#9333ea");
    const [angle, setAngle] = useState(135);
    const [type, setType] = useState<"linear" | "radial">("linear");
    const [copied, setCopied] = useState(false);

    const gradientCss =
        type === "linear"
            ? `linear-gradient(${angle}deg, ${color1}, ${color2})`
            : `radial-gradient(circle, ${color1}, ${color2})`;

    const handleCopy = () => {
        navigator.clipboard.writeText(`background: ${gradientCss};`);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        Gradient Type
                    </label>
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => setType("linear")}
                            className={`flex-1 py-2.5 rounded-xl font-bold text-xs border transition ${
                                type === "linear" ? "border-blue-600 bg-blue-50 text-blue-700" : "bg-white border-neutral-200"
                            }`}
                        >
                            Linear
                        </button>
                        <button
                            type="button"
                            onClick={() => setType("radial")}
                            className={`flex-1 py-2.5 rounded-xl font-bold text-xs border transition ${
                                type === "radial" ? "border-blue-600 bg-blue-50 text-blue-700" : "bg-white border-neutral-200"
                            }`}
                        >
                            Radial
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Color 1</label>
                        <div className="flex gap-2">
                            <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="h-10 w-10 border rounded-lg cursor-pointer" />
                            <input type="text" value={color1} onChange={(e) => setColor1(e.target.value)} className="flex-1 p-2 border rounded-lg font-mono text-xs uppercase" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Color 2</label>
                        <div className="flex gap-2">
                            <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="h-10 w-10 border rounded-lg cursor-pointer" />
                            <input type="text" value={color2} onChange={(e) => setColor2(e.target.value)} className="flex-1 p-2 border rounded-lg font-mono text-xs uppercase" />
                        </div>
                    </div>
                </div>

                {type === "linear" && (
                    <div>
                        <div className="flex justify-between items-center text-xs font-bold text-neutral-500 mb-2">
                            <span>Angle</span>
                            <span>{angle}°</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={angle}
                            onChange={(e) => setAngle(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>
                )}

                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        Generated CSS
                    </label>
                    <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl break-all">
                        background: {gradientCss};
                    </div>
                    <button
                        onClick={handleCopy}
                        className="mt-3 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition"
                    >
                        {copied ? "Copied to Clipboard!" : "Copy CSS"}
                    </button>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div
                    style={{ background: gradientCss }}
                    className="w-full h-80 rounded-2xl shadow-lg border border-black/10 flex items-center justify-center text-white font-extrabold text-xl drop-shadow"
                >
                    Gradient Preview
                </div>
            </div>
        </div>
    );
}
