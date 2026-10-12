"use client";
import React, { useState } from "react";

export default function ColorBlindnessSimulator() {
    const [mode, setMode] = useState<"normal" | "protanopia" | "deuteranopia" | "tritanopia">("normal");

    const filters: Record<string, string> = {
        normal: "none",
        protanopia: "url('#protanopia')",
        deuteranopia: "url('#deuteranopia')",
        tritanopia: "url('#tritanopia')",
    };

    return (
        <div className="space-y-6">
            <div className="flex gap-2">
                {["normal", "protanopia", "deuteranopia", "tritanopia"].map(m => (
                    <button
                        key={m}
                        onClick={() => setMode(m as any)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold capitalize border ${mode === m ? "bg-blue-600 text-white border-blue-600" : "bg-white"}`}
                    >
                        {m}
                    </button>
                ))}
            </div>

            <div style={{ filter: mode === "normal" ? "none" : "grayscale(0.7) contrast(1.2)" }} className="grid grid-cols-6 gap-3 p-8 bg-neutral-100 rounded-2xl">
                {["#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4", "#8b5cf6"].map(c => (
                    <div key={c} style={{ backgroundColor: c }} className="h-28 rounded-xl shadow" />
                ))}
            </div>
        </div>
    );
}
