"use client";
import React, { useState } from "react";

export default function ChineseConverter() {
    const [input, setInput] = useState("简体中文与繁體中文转换");
    const [mode, setMode] = useState<"simp" | "trad">("trad");

    // Sample mapping for demonstration
    const convert = (str: string) => {
        // Quick common character mapping
        const map: Record<string, string> = { "国": "國", "体": "體", "简": "簡", "转": "轉", "换": "換" };
        return str.split("").map(c => map[c] || c).join("");
    };

    return (
        <div className="space-y-4">
            <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-36 p-4 border rounded-2xl text-base" />
            <div className="p-4 bg-neutral-50 border rounded-xl text-lg font-medium">
                {convert(input)}
            </div>
        </div>
    );
}
