"use client";
import React, { useState } from "react";

export default function MarkdownEditor() {
    const [md, setMd] = useState("# Project Roadmap\n\n- **Phase 1:** Core utilities\n- **Phase 2:** Cloudflare build optimization\n\n> Free open source tools forever.");

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <span className="text-xs font-bold uppercase text-neutral-400">Markdown Input</span>
                <textarea value={md} onChange={e => setMd(e.target.value)} className="w-full h-72 p-4 border rounded-2xl font-mono text-sm" />
            </div>
            <div className="space-y-2">
                <span className="text-xs font-bold uppercase text-neutral-400">HTML / Text Output</span>
                <div className="w-full h-72 p-4 bg-neutral-50 border rounded-2xl font-mono text-xs overflow-y-auto whitespace-pre-wrap">
                    {md}
                </div>
            </div>
        </div>
    );
}
