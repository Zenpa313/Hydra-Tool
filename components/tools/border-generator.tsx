"use client";
import React, { useState } from "react";

export default function BorderGenerator() {
    const [width, setWidth] = useState(2);
    const [radius, setRadius] = useState(8);
    const [style, setStyle] = useState("solid");
    const [color, setColor] = useState("#3b82f6");

    const borderCss = `${width}px ${style} ${color}`;
    const borderRadiusCss = `${radius}px`;

    const code = `border: ${borderCss};\nborder-radius: ${borderRadiusCss};`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Width (px)</label>
                        <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Radius (px)</label>
                        <input type="number" value={radius} onChange={(e) => setRadius(Number(e.target.value))} className="w-full p-2 border rounded-lg" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Border Style</label>
                    <select value={style} onChange={(e) => setStyle(e.target.value)} className="w-full p-2 border rounded-lg">
                        <option value="solid">Solid</option>
                        <option value="dashed">Dashed</option>
                        <option value="dotted">Dotted</option>
                        <option value="double">Double</option>
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Color</label>
                    <div className="flex gap-2">
                        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-10 w-10 border rounded-lg" />
                        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="flex-1 p-2 border rounded-lg font-mono text-xs uppercase" />
                    </div>
                </div>

                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl break-all">
                    {code}
                </div>
            </div>

            <div className="flex items-center justify-center bg-neutral-50 rounded-2xl p-10 border border-neutral-200">
                <div
                    style={{ border: borderCss, borderRadius: borderRadiusCss }}
                    className="w-48 h-48 bg-white"
                />
            </div>
        </div>
    );
}
