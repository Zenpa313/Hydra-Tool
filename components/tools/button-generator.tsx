"use client";
import React, { useState } from "react";

export default function ButtonGenerator() {
    const [text, setText] = useState("Click Me");
    const [bg, setBg] = useState("#2563eb");
    const [textColor, setTextColor] = useState("#ffffff");
    const [px, setPx] = useState(24);
    const [py, setPy] = useState(12);
    const [radius, setRadius] = useState(10);
    const [fontSize, setFontSize] = useState(14);
    const [shadow, setShadow] = useState(true);

    const style = {
        backgroundColor: bg,
        color: textColor,
        padding: `${py}px ${px}px`,
        borderRadius: `${radius}px`,
        fontSize: `${fontSize}px`,
        boxShadow: shadow ? "0 4px 14px 0 rgba(0, 0, 0, 0.2)" : "none",
        fontWeight: "600",
        cursor: "pointer",
        display: "inline-block",
        border: "none",
    };

    const cssCode = `padding: ${py}px ${px}px;\nbackground-color: ${bg};\ncolor: ${textColor};\nborder-radius: ${radius}px;\nfont-size: ${fontSize}px;\nfont-weight: 600;\nborder: none;\ncursor: pointer;${shadow ? "\nbox-shadow: 0 4px 14px rgba(0,0,0,0.2);" : ""}`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Button Label</label>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Background Color</label>
                        <input type="color" value={bg} onChange={e => setBg(e.target.value)} className="w-full h-9 rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Text Color</label>
                        <input type="color" value={textColor} onChange={e => setTextColor(e.target.value)} className="w-full h-9 rounded-lg" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Padding X ({px}px)</label>
                        <input type="range" min="8" max="64" value={px} onChange={e => setPx(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Padding Y ({py}px)</label>
                        <input type="range" min="4" max="32" value={py} onChange={e => setPy(Number(e.target.value))} className="w-full" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Border Radius ({radius}px)</label>
                        <input type="range" min="0" max="40" value={radius} onChange={e => setRadius(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Font Size ({fontSize}px)</label>
                        <input type="range" min="10" max="24" value={fontSize} onChange={e => setFontSize(Number(e.target.value))} className="w-full" />
                    </div>
                </div>
                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl whitespace-pre-wrap">{cssCode}</div>
            </div>

            <div className="flex items-center justify-center p-12 bg-neutral-100 rounded-2xl border">
                <button style={style}>{text}</button>
            </div>
        </div>
    );
}
