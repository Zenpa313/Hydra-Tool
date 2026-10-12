"use client";
import { useState } from "react";

export default function MorseCode() {
    const [text, setText] = useState("");
    const [copied, setCopied] = useState(false);
    
    const processed = text.toUpperCase();

    const handleCopy = () => {
        navigator.clipboard.writeText(processed);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Input Text</label>
                <textarea 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type or paste your text here..."
                    className="w-full h-32 bg-neutral-900 border border-neutral-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="flex justify-end gap-3">
                <button 
                    onClick={handleCopy}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition"
                >
                    {copied ? "Copied!" : "Copy Result"}
                </button>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Output</span>
                <div className="text-lg text-neutral-200 mt-2 font-mono whitespace-pre-wrap min-h-[4rem]">{processed || "Output will appear here..."}</div>
            </div>
        </div>
    );
}
