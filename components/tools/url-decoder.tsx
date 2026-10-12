"use client";
import { useState } from "react";

export default function UrlDecoder() {
    const [input, setInput] = useState("");

    const decode = (val: string) => {
        if (!val) return "";
        try {
            return decodeURIComponent(val);
        } catch {
            return "Invalid URL encoded string";
        }
    };

    return (
        <div className="space-y-4">
            <textarea
                className="w-full p-4 border rounded-xl font-mono text-sm h-32 focus:ring-2 focus:ring-blue-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste URL-encoded string here (e.g. Hello%20World)..."
            />
            <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Decoded Output</label>
                <div className="p-4 bg-neutral-100 rounded-xl font-mono text-sm break-all min-h-[60px]">
                    {decode(input) || <span className="text-neutral-400">Decoded text will appear here</span>}
                </div>
            </div>
        </div>
    );
}
