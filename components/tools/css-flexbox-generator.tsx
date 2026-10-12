"use client";
import React, { useState } from "react";

export default function CssFlexboxGenerator() {
    const [direction, setDirection] = useState("row");
    const [justify, setJustify] = useState("center");
    const [align, setAlign] = useState("center");
    const [gap, setGap] = useState(16);

    const cssCode = `display: flex;\nflex-direction: ${direction};\njustify-content: ${justify};\nalign-items: ${align};\ngap: ${gap}px;`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Flex Direction</label>
                    <select value={direction} onChange={e => setDirection(e.target.value)} className="w-full p-2 border rounded-xl text-sm">
                        <option value="row">row</option>
                        <option value="column">column</option>
                        <option value="row-reverse">row-reverse</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Justify Content</label>
                    <select value={justify} onChange={e => setJustify(e.target.value)} className="w-full p-2 border rounded-xl text-sm">
                        <option value="flex-start">flex-start</option>
                        <option value="center">center</option>
                        <option value="flex-end">flex-end</option>
                        <option value="space-between">space-between</option>
                        <option value="space-around">space-around</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Align Items</label>
                    <select value={align} onChange={e => setAlign(e.target.value)} className="w-full p-2 border rounded-xl text-sm">
                        <option value="stretch">stretch</option>
                        <option value="center">center</option>
                        <option value="flex-start">flex-start</option>
                        <option value="flex-end">flex-end</option>
                    </select>
                </div>
                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl whitespace-pre-wrap">{cssCode}</div>
            </div>

            <div
                style={{ display: "flex", flexDirection: direction as any, justifyContent: justify, alignItems: align, gap: `${gap}px` }}
                className="p-8 bg-neutral-100 rounded-2xl border min-h-[300px]"
            >
                <div className="w-16 h-16 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center">1</div>
                <div className="w-16 h-16 bg-indigo-600 text-white font-bold rounded-xl flex items-center justify-center">2</div>
                <div className="w-16 h-16 bg-purple-600 text-white font-bold rounded-xl flex items-center justify-center">3</div>
            </div>
        </div>
    );
}
