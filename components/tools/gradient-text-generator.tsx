"use client";
import React, { useState } from "react";

export default function GradientTextGenerator() {
    const [text, setText] = useState("Empower Your Creative Vision");
    const [color1, setColor1] = useState("#2563eb");
    const [color2, setColor2] = useState("#ec4899");
    const [angle, setAngle] = useState(90);

    const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    const cssCode = `background: ${gradient};\n-webkit-background-clip: text;\n-webkit-text-fill-color: transparent;`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Text String</label>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} className="w-full p-2.5 border rounded-xl text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Start Color</label>
                        <input type="color" value={color1} onChange={e => setColor1(e.target.value)} className="w-full h-9 rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">End Color</label>
                        <input type="color" value={color2} onChange={e => setColor2(e.target.value)} className="w-full h-9 rounded-lg" />
                    </div>
                </div>
                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl whitespace-pre-wrap">{cssCode}</div>
            </div>

            <div className="flex items-center justify-center p-12 bg-neutral-50 rounded-2xl border">
                <h2
                    style={{ background: gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    className="text-4xl sm:text-5xl font-black tracking-tight text-center"
                >
                    {text}
                </h2>
            </div>
        </div>
    );
}
