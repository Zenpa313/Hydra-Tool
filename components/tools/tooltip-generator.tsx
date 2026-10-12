"use client";
import React, { useState } from "react";

export default function TooltipGenerator() {
    const [text, setText] = useState("Helpful tip info");
    const [pos, setPos] = useState<"top" | "bottom">("top");

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Tooltip Content</label>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} className="w-full p-2.5 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Position</label>
                    <div className="flex gap-2">
                        {["top", "bottom"].map(p => (
                            <button
                                key={p}
                                onClick={() => setPos(p as any)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold capitalize border ${pos === p ? "bg-blue-600 text-white border-blue-600" : "bg-white"}`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center p-16 bg-neutral-100 rounded-2xl border">
                <div className="relative group inline-block">
                    <button className="px-5 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-bold">
                        Hover Over Me
                    </button>
                    <div className={`absolute ${pos === "top" ? "bottom-full mb-2" : "top-full mt-2"} left-1/2 -translate-x-1/2 hidden group-hover:block px-3 py-1.5 bg-neutral-800 text-white text-[11px] rounded-lg shadow-lg whitespace-nowrap z-20`}>
                        {text}
                    </div>
                </div>
            </div>
        </div>
    );
}
