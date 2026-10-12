"use client";
import React, { useState } from "react";

export default function HtmlEntitiesTool() {
    const [input, setInput] = useState('<div class="greeting">Hello & Welcome!</div>');
    const [mode, setMode] = useState<"encode" | "decode">("encode");
    const [copied, setCopied] = useState(false);

    const encodeHtml = (str: string) => {
        return str.replace(/[\u00A0-\u9999<>&\"]/g, (i) => '&#' + i.charCodeAt(0) + ';');
    };

    const decodeHtml = (str: string) => {
        const doc = new DOMParser().parseFromString(str, "text/html");
        return doc.documentElement.textContent || "";
    };

    const output = mode === "encode" ? encodeHtml(input) : decodeHtml(input);

    return (
        <div className="space-y-6">
            <div className="flex gap-2">
                <button onClick={() => setMode("encode")} className={`px-4 py-2 rounded-xl text-xs font-bold border ${mode === "encode" ? "bg-blue-600 text-white" : "bg-white"}`}>Encode Entities</button>
                <button onClick={() => setMode("decode")} className={`px-4 py-2 rounded-xl text-xs font-bold border ${mode === "decode" ? "bg-blue-600 text-white" : "bg-white"}`}>Decode Entities</button>
            </div>
            <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-36 p-4 border rounded-2xl font-mono text-sm" />
            <div className="p-4 bg-neutral-50 border rounded-2xl">
                <div className="flex justify-between mb-2">
                    <span className="text-xs font-bold uppercase text-neutral-400">Converted Entities</span>
                    <button onClick={() => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); }} className="text-xs font-bold text-blue-600">{copied ? "Copied!" : "Copy"}</button>
                </div>
                <div className="font-mono text-sm break-all select-all p-3 bg-white border rounded-xl">{output}</div>
            </div>
        </div>
    );
}
