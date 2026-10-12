"use client";
import React, { useState } from "react";

export default function ColorPicker() {
    const [hex, setHex] = useState("#3b82f6");
    const [copied, setCopied] = useState<string | null>(null);

    // Convert HEX to RGB
    const hexToRgb = (h: string) => {
        let clean = h.replace("#", "");
        if (clean.length === 3) {
            clean = clean.split("").map((c) => c + c).join("");
        }
        const num = parseInt(clean, 16);
        return {
            r: (num >> 16) & 255,
            g: (num >> 8) & 255,
            b: num & 255,
        };
    };

    // Convert RGB to HSL
    const rgbToHsl = (r: number, g: number, b: number) => {
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 0;
        let s = 0;
        const l = (max + min) / 2;

        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }

        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100),
        };
    };

    const rgb = hexToRgb(hex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

    const rgbStr = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    const hslStr = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

    const copyText = (val: string, key: string) => {
        navigator.clipboard.writeText(val);
        setCopied(key);
        setTimeout(() => setCopied(null), 1500);
    };

    const presets = [
        "#ef4444", "#f97316", "#f59e0b", "#10b981",
        "#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6",
        "#ec4899", "#111827", "#64748b", "#ffffff"
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        Live Palette Visualizer
                    </label>
                    <div className="relative">
                        <input
                            type="color"
                            value={hex}
                            onChange={(e) => setHex(e.target.value)}
                            className="w-full h-44 rounded-2xl cursor-pointer border border-neutral-300 p-2 bg-white shadow-sm"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        Presets & Palettes
                    </label>
                    <div className="grid grid-cols-6 gap-2">
                        {presets.map((c) => (
                            <button
                                key={c}
                                onClick={() => setHex(c)}
                                style={{ backgroundColor: c }}
                                className="h-9 rounded-xl border border-black/10 shadow-sm transition hover:scale-105"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Color Formats & Values
                </label>

                {[
                    { label: "HEX", val: hex.toUpperCase(), key: "hex" },
                    { label: "RGB", val: rgbStr, key: "rgb" },
                    { label: "HSL", val: hslStr, key: "hsl" },
                ].map((item) => (
                    <div
                        key={item.key}
                        className="flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 rounded-xl"
                    >
                        <div>
                            <span className="text-[11px] font-bold text-neutral-400 block">{item.label}</span>
                            <span className="font-mono text-sm font-semibold text-neutral-900">{item.val}</span>
                        </div>
                        <button
                            onClick={() => copyText(item.val, item.key)}
                            className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition"
                        >
                            {copied === item.key ? "Copied!" : "Copy"}
                        </button>
                    </div>
                ))}

                <div
                    className="p-5 rounded-xl border border-neutral-200 text-center font-bold text-sm shadow-sm transition"
                    style={{
                        backgroundColor: hex,
                        color: hsl.l > 55 ? "#000000" : "#ffffff",
                    }}
                >
                    Live Contrast Preview &bull; {hex}
                </div>
            </div>
        </div>
    );
}
