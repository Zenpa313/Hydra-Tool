"use client";
import React, { useState } from "react";

export default function ClipPathGenerator() {
    const [shape, setShape] = useState("triangle");

    const shapes: Record<string, string> = {
        triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
        trapezoid: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
        parallelogram: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
        rhombus: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        pentagon: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        hexagon: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        star: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    };

    const currentClip = shapes[shape];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Preset Shape</label>
                <div className="grid grid-cols-3 gap-2">
                    {Object.keys(shapes).map(s => (
                        <button
                            key={s}
                            onClick={() => setShape(s)}
                            className={`p-2.5 rounded-xl text-xs font-bold capitalize border ${shape === s ? "border-blue-600 bg-blue-50 text-blue-700" : "bg-white"}`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl">clip-path: {currentClip};</div>
            </div>

            <div className="flex items-center justify-center p-12 bg-neutral-100 rounded-2xl border">
                <div style={{ clipPath: currentClip }} className="w-48 h-48 bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-xl" />
            </div>
        </div>
    );
}
