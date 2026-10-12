"use client";
import React, { useState } from "react";

export default function ColorContrastChecker() {
    const [textColor, setTextColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");

    // Calculate relative luminance
    const getLuminance = (hex: string) => {
        let clean = hex.replace("#", "");
        if (clean.length === 3) clean = clean.split("").map((c) => c + c).join("");
        const rgb = [0, 1, 2].map((i) => {
            let channel = parseInt(clean.substr(i * 2, 2), 16) / 255;
            return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
    };

    const l1 = getLuminance(textColor);
    const l2 = getLuminance(bgColor);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    const ratioFormatted = ratio.toFixed(2);

    const normalAa = ratio >= 4.5;
    const normalAaa = ratio >= 7.0;
    const largeAa = ratio >= 3.0;
    const largeAaa = ratio >= 4.5;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Text Color</label>
                        <div className="flex gap-2">
                            <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="h-10 w-10 border rounded-lg cursor-pointer" />
                            <input type="text" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="flex-1 p-2 border rounded-lg font-mono text-xs uppercase" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Background Color</label>
                        <div className="flex gap-2">
                            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="h-10 w-10 border rounded-lg cursor-pointer" />
                            <input type="text" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="flex-1 p-2 border rounded-lg font-mono text-xs uppercase" />
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-2xl text-center">
                    <span className="text-4xl font-black text-neutral-900 block">{ratioFormatted}:1</span>
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Contrast Ratio</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 border rounded-xl bg-white shadow-sm">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-neutral-700">Normal Text (AA)</span>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded ${normalAa ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                {normalAa ? "PASS" : "FAIL"}
                            </span>
                        </div>
                        <p className="text-[11px] text-neutral-400">Requires minimum 4.5:1</p>
                    </div>

                    <div className="p-4 border rounded-xl bg-white shadow-sm">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-neutral-700">Normal Text (AAA)</span>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded ${normalAaa ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                {normalAaa ? "PASS" : "FAIL"}
                            </span>
                        </div>
                        <p className="text-[11px] text-neutral-400">Requires minimum 7.0:1</p>
                    </div>

                    <div className="p-4 border rounded-xl bg-white shadow-sm">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-neutral-700">Large Text (AA)</span>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded ${largeAa ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                {largeAa ? "PASS" : "FAIL"}
                            </span>
                        </div>
                        <p className="text-[11px] text-neutral-400">Requires minimum 3.0:1</p>
                    </div>

                    <div className="p-4 border rounded-xl bg-white shadow-sm">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-neutral-700">Large Text (AAA)</span>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded ${largeAaa ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                {largeAaa ? "PASS" : "FAIL"}
                            </span>
                        </div>
                        <p className="text-[11px] text-neutral-400">Requires minimum 4.5:1</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <div
                    style={{ backgroundColor: bgColor, color: textColor }}
                    className="p-8 rounded-2xl border border-neutral-300 shadow-sm space-y-4"
                >
                    <h3 className="text-2xl font-bold">Preview Heading 24px Bold</h3>
                    <p className="text-base leading-relaxed">
                        This is normal body copy (16px) rendering live in your chosen color combination. Ensuring adequate contrast makes your content legible for everyone.
                    </p>
                    <button
                        style={{ border: `1px solid ${textColor}`, color: textColor }}
                        className="px-4 py-2 rounded-lg font-semibold text-xs"
                    >
                        Sample UI Button
                    </button>
                </div>
            </div>
        </div>
    );
}
