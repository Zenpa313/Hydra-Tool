"use client";
import React, { useState } from "react";

export default function ExcelToCsv() {
    const [tsv, setTsv] = useState("Name\tAge\tRole\nAlice\t28\tEngineer\nBob\t34\tDesigner");
    const [copied, setCopied] = useState(false);

    const convert = () => {
        const lines = tsv.trim().split("\n");
        return lines.map(line => line.split("\t").map(cell => `"${cell.replace(/"/g, '""')}"`).join(",")).join("\n");
    };

    const csvOutput = convert();

    return (
        <div className="space-y-4">
            <textarea
                value={tsv}
                onChange={e => setTsv(e.target.value)}
                placeholder="Paste tab-separated cells copied directly from Excel / Sheets..."
                className="w-full h-44 p-4 border rounded-2xl font-mono text-sm"
            />
            <div className="p-4 bg-neutral-50 border rounded-2xl space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase text-neutral-400">CSV Output</span>
                    <button
                        onClick={() => { navigator.clipboard.writeText(csvOutput); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
                        className="text-xs font-bold text-blue-600 hover:underline"
                    >
                        {copied ? "Copied!" : "Copy CSV"}
                    </button>
                </div>
                <pre className="p-3 bg-white border rounded-xl font-mono text-xs whitespace-pre-wrap">{csvOutput}</pre>
            </div>
        </div>
    );
}
