"use client";
import React, { useState } from "react";

export default function YamlFormatter() {
    const [yaml, setYaml] = useState("version: '3.8'\nservices:\n  web:\n    image: nginx\n    ports:\n      - '80:80'");
    const [copied, setCopied] = useState(false);

    const validateAndClean = () => {
        // Strip tabs and normalize spaces
        const cleaned = yaml.replace(/\t/g, "  ").trim();
        setYaml(cleaned);
    };

    return (
        <div className="space-y-4">
            <textarea value={yaml} onChange={e => setYaml(e.target.value)} className="w-full h-48 p-4 border rounded-2xl font-mono text-sm" />
            <div className="flex gap-3">
                <button onClick={validateAndClean} className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs">Clean Indentation</button>
                <button onClick={() => { navigator.clipboard.writeText(yaml); setCopied(true); setTimeout(() => setCopied(false), 1500); }} className="px-5 py-2.5 bg-neutral-900 text-white rounded-xl font-bold text-xs">
                    {copied ? "Copied!" : "Copy YAML"}
                </button>
            </div>
        </div>
    );
}
