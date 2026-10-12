"use client";
import React, { useState } from "react";

export default function Base64Tool() {
    const [input, setInput] = useState("Hello, World!");
    const [mode, setMode] = useState<"encode" | "decode">("encode");
    const [copied, setCopied] = useState(false);

    let output = "";
    try {
        if (mode === "encode") {
            output = btoa(unescape(encodeURIComponent(input)));
        } else {
            output = decodeURIComponent(escape(atob(input)));
        }
    } catch {
        output = "Invalid input for " + mode;
    }

    const copy = () => {
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="space-y-6">
            <div className="flex gap-2">
                <button
                    onClick={() => setMode("encode")}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs border ${mode === "encode" ? "bg-blue-600 text-white border-blue-600" : "bg-white"}`}
                >
                    Encode to Base64
                </button>
                <button
                    onClick={() => setMode("decode")}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs border ${mode === "decode" ? "bg-blue-600 text-white border-blue-600" : "bg-white"}`}
                >
                    Decode from Base64
                </button>
            </div>

            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={mode === "encode" ? "Enter plain text to encode..." : "Paste Base64 string to decode..."}
                className="w-full h-36 p-4 border border-neutral-300 rounded-2xl font-mono text-sm"
            />

            <div className="p-4 bg-neutral-50 border rounded-2xl space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase text-neutral-400">Result</span>
                    <button onClick={copy} className="text-xs font-bold text-blue-600 hover:underline">
                        {copied ? "Copied!" : "Copy Output"}
                    </button>
                </div>
                <div className="font-mono text-sm break-all text-neutral-900 select-all p-2 bg-white rounded-xl border">
                    {output}
                </div>
            </div>
        </div>
    );
}
