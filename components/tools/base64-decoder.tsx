"use client";
import { useState } from "react";

export default function Base64Decoder() {
    const [input, setInput] = useState("");

    const decode = (val: string) => {
        if (!val) return "";
        try {
            return atob(val);
        } catch {
            return "Invalid Base64 string";
        }
    };

    return (
        <div className="space-y-4">
            <textarea
                className="w-full p-4 border rounded-xl font-mono text-sm h-32 focus:ring-2 focus:ring-blue-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste Base64 encoded string here..."
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
