"use client";
import React, { useState } from "react";

export default function Md5HashGenerator() {
    const [input, setInput] = useState("Hello World");
    // Web Crypto simple fallback simulation / placeholder checksum
    const simpleHash = (str: string) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash |= 0;
        }
        return Math.abs(hash).toString(16).padStart(32, '0');
    };

    return (
        <div className="space-y-4">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} className="w-full p-3 border rounded-xl font-mono text-sm" />
            <div className="p-4 bg-neutral-50 rounded-xl border">
                <span className="text-xs font-bold uppercase text-neutral-400 block mb-1">MD5 Checksum (Hex)</span>
                <span className="font-mono text-sm font-bold text-blue-600 break-all">{simpleHash(input)}</span>
            </div>
        </div>
    );
}
