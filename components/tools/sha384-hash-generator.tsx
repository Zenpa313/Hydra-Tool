"use client";
import React, { useState, useEffect } from "react";

export default function Sha384HashGenerator() {
    const [input, setInput] = useState("Hello World");
    const [hash, setHash] = useState("");

    useEffect(() => {
        const compute = async () => {
            const encoder = new TextEncoder();
            const data = encoder.encode(input);
            const buffer = await crypto.subtle.digest("SHA-384", data);
            const array = Array.from(new Uint8Array(buffer));
            setHash(array.map(b => b.toString(16).padStart(2, "0")).join(""));
        };
        compute();
    }, [input]);

    return (
        <div className="space-y-4">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} className="w-full p-3 border rounded-xl font-mono text-sm" />
            <div className="p-4 bg-neutral-50 rounded-xl border">
                <span className="text-xs font-bold uppercase text-neutral-400 block mb-1">SHA-384 Hash (384-bit)</span>
                <span className="font-mono text-sm font-bold text-blue-600 break-all">{hash}</span>
            </div>
        </div>
    );
}
