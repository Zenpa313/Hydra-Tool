"use client";
import React, { useState } from "react";

export default function ExcelToJson() {
    const [tsv, setTsv] = useState("id\tname\tstatus\n1\tServer Alpha\tactive\n2\tDatabase Beta\tidle");
    const [jsonResult, setJsonResult] = useState("");

    const convert = () => {
        try {
            const lines = tsv.trim().split("\n");
            if (lines.length < 2) return;
            const headers = lines[0].split("\t").map(h => h.trim());
            const data = lines.slice(1).map(line => {
                const values = line.split("\t").map(v => v.trim());
                const obj: Record<string, string> = {};
                headers.forEach((h, idx) => {
                    obj[h] = values[idx] || "";
                });
                return obj;
            });
            setJsonResult(JSON.stringify(data, null, 2));
        } catch {
            setJsonResult("Error converting TSV/Excel data to JSON.");
        }
    };

    return (
        <div className="space-y-4">
            <textarea
                value={tsv}
                onChange={e => setTsv(e.target.value)}
                placeholder="Paste tabular rows from Excel..."
                className="w-full h-40 p-4 border rounded-2xl font-mono text-sm"
            />
            <button onClick={convert} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs">
                Convert to JSON
            </button>
            {jsonResult && (
                <pre className="p-4 bg-neutral-900 text-neutral-100 rounded-2xl font-mono text-xs overflow-x-auto max-h-72">
                    {jsonResult}
                </pre>
            )}
        </div>
    );
}
