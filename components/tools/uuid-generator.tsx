"use client";
import React, { useState } from "react";

export default function UuidGenerator() {
    const [uuid, setUuid] = useState(crypto.randomUUID());
    const [copied, setCopied] = useState(false);

    return (
        <div className="space-y-4">
            <div className="flex gap-3">
                <input type="text" readOnly value={uuid} className="w-full p-3 border rounded-xl font-mono text-base font-bold bg-neutral-50" />
                <button onClick={() => { navigator.clipboard.writeText(uuid); setCopied(true); setTimeout(() => setCopied(false), 1500); }} className="px-5 py-2 bg-blue-600 text-white rounded-xl font-bold text-xs">
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
            <button onClick={() => setUuid(crypto.randomUUID())} className="w-full py-3 bg-neutral-900 text-white rounded-xl font-bold text-xs">
                Generate New UUID (v4)
            </button>
        </div>
    );
}
