"use client";
import React, { useState } from "react";

export default function CursorGallery() {
    const cursors = [
        "auto", "default", "pointer", "wait", "text", "move", "not-allowed",
        "help", "progress", "crosshair", "grab", "grabbing", "zoom-in", "zoom-out",
        "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize"
    ];
    const [copied, setCopied] = useState("");

    const copy = (c: string) => {
        navigator.clipboard.writeText(`cursor: ${c};`);
        setCopied(c);
        setTimeout(() => setCopied(""), 1500);
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                {cursors.map(c => (
                    <div
                        key={c}
                        style={{ cursor: c }}
                        onClick={() => copy(c)}
                        className="p-6 bg-white border border-neutral-200 rounded-xl hover:border-blue-500 hover:shadow-md transition text-center"
                    >
                        <span className="font-mono text-sm font-bold text-neutral-900 block">{c}</span>
                        <span className="text-[10px] text-neutral-400 mt-1 block">
                            {copied === c ? "Copied!" : "Hover & Click"}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
