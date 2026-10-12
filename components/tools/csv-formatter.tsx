"use client";
import React, { useState } from "react";

export default function CsvFormatter() {
    const [csv, setCsv] = useState("name,age,city\nJohn,30,New York\nJane,25,San Francisco");
    const [delimiter, setDelimiter] = useState(",");
    const [formatted, setFormatted] = useState("");
    const [copied, setCopied] = useState(false);

    const format = () => {
        try {
            const lines = csv.trim().split("\n");
            const clean = lines.map(line => line.split(delimiter).map(cell => cell.trim()).join(delimiter));
            setFormatted(clean.join("\n"));
        } catch {
            setFormatted("Invalid CSV format");
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex gap-4 items-center">
                <label className="text-xs font-bold uppercase text-neutral-500">Delimiter:</label>
                <select value={delimiter} onChange={e => setDelimiter(e.target.value)} className="p-2 border rounded-xl text-sm font-mono">
                    <option value=",">Comma (,)</option>
                    <option value=";">Semicolon (;)</option>
                    <option value="\t">Tab (\t)</option>
                    <option value="|">Pipe (|)</option>
                </select>
                <button onClick={format} className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition">
                    Format & Align CSV
                </button>
            </div>

            <textarea
                value={csv}
                onChange={e => setCsv(e.target.value)}
                placeholder="Paste CSV rows here..."
                className="w-full h-48 p-4 border rounded-2xl font-mono text-sm"
            />

            {formatted && (
                <div className="p-4 bg-neutral-900 text-neutral-100 rounded-2xl font-mono text-xs overflow-x-auto whitespace-pre relative">
                    <button
                        onClick={() => { navigator.clipboard.writeText(formatted); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
                        className="absolute top-3 right-3 px-3 py-1 bg-neutral-700 text-white rounded text-xs"
                    >
                        {copied ? "Copied!" : "Copy Clean CSV"}
                    </button>
                    {formatted}
                </div>
            )}
        </div>
    );
}
