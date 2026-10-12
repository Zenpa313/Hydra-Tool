"use client";
import React, { useState } from "react";

export default function MarkdownToHtml() {
    const [md, setMd] = useState("# Heading\n\nThis is a **paragraph** with [a link](https://example.com).");
    const [copied, setCopied] = useState(false);

    // Simple robust markdown parser
    const parse = (text: string) => {
        let h = text
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            .replace(/\*(.*)\*/gim, '<em>$1</em>')
            .replace(/\[([^\[]+)\]\(([^\)]+)\)/gim, '<a href="$2">$1</a>')
            .replace(/\n$/gim, '<br />');
        return h.trim();
    };

    const html = parse(md);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-xs font-bold uppercase text-neutral-400 mb-2">Markdown</label>
                <textarea rows={8} value={md} onChange={e => setMd(e.target.value)} className="w-full p-4 border rounded-2xl font-mono text-sm" />
            </div>
            <div>
                <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase text-neutral-400">Generated HTML</label>
                    <button onClick={() => { navigator.clipboard.writeText(html); setCopied(true); setTimeout(() => setCopied(false), 1500); }} className="text-xs font-bold text-blue-600">
                        {copied ? "Copied!" : "Copy HTML"}
                    </button>
                </div>
                <pre className="p-4 bg-neutral-900 text-neutral-100 rounded-2xl font-mono text-xs overflow-x-auto whitespace-pre-wrap h-48">{html}</pre>
            </div>
        </div>
    );
}
