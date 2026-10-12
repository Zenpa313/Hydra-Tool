"use client";
import React, { useState } from "react";

export default function CaseConverter() {
    const [text, setText] = useState("the quick brown fox jumps over the lazy dog");
    const [copied, setCopied] = useState(false);

    const transform = (type: string) => {
        switch (type) {
            case "upper": setText(text.toUpperCase()); break;
            case "lower": setText(text.toLowerCase()); break;
            case "title": setText(text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())); break;
            case "sentence": setText(text.toLowerCase().replace(/(^\s*\w|[\.!?]\s*\w)/g, (c) => c.toUpperCase())); break;
            case "camel": {
                const words = text.toLowerCase().trim().split(/[\s_-]+/);
                setText(words.map((w, i) => i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)).join(""));
                break;
            }
            case "snake": setText(text.toLowerCase().trim().replace(/[\s-]+/g, "_")); break;
            case "kebab": setText(text.toLowerCase().trim().replace(/[\s_]+/g, "-")); break;
            case "constant": setText(text.toUpperCase().trim().replace(/[\s-]+/g, "_")); break;
        }
    };

    const copy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="space-y-6">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type or paste text to convert casing..."
                className="w-full h-48 p-4 border border-neutral-300 rounded-2xl font-mono text-sm focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex flex-wrap gap-2">
                {[
                    { label: "UPPERCASE", id: "upper" },
                    { label: "lowercase", id: "lower" },
                    { label: "Title Case", id: "title" },
                    { label: "Sentence case", id: "sentence" },
                    { label: "camelCase", id: "camel" },
                    { label: "snake_case", id: "snake" },
                    { label: "kebab-case", id: "kebab" },
                    { label: "CONSTANT_CASE", id: "constant" },
                ].map((b) => (
                    <button
                        key={b.id}
                        onClick={() => transform(b.id)}
                        className="px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-xs font-semibold transition"
                    >
                        {b.label}
                    </button>
                ))}
            </div>

            <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-neutral-400 font-mono">{text.length} characters &bull; {text.trim() ? text.trim().split(/\s+/).length : 0} words</span>
                <button onClick={copy} className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition">
                    {copied ? "Copied!" : "Copy Text"}
                </button>
            </div>
        </div>
    );
}
