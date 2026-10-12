"use client";
import React, { useState } from "react";

export default function SqlToJson() {
    const [sql, setSql] = useState("INSERT INTO users (id, name, email) VALUES (1, 'Alice', 'alice@example.com'), (2, 'Bob', 'bob@example.com');");
    const [jsonResult, setJsonResult] = useState("");

    const convert = () => {
        try {
            // Regex match INSERT INTO table (cols) VALUES (...)
            const colsMatch = sql.match(/INSERT\s+INTO\s+\w+\s*\(([^)]+)\)/i);
            const valuesMatch = sql.match(/VALUES\s*([\s\S]+);?$/i);

            if (!colsMatch || !valuesMatch) {
                setJsonResult("Could not parse SQL statement. Please ensure it follows 'INSERT INTO table (col1, col2) VALUES (...)'.");
                return;
            }

            const cols = colsMatch[1].split(",").map(c => c.trim().replace(/[`"']/g, ""));
            const rawValues = valuesMatch[1].trim();

            const tupleMatches = rawValues.match(/\(([^)]+)\)/g);
            if (!tupleMatches) {
                setJsonResult("No VALUES tuples found.");
                return;
            }

            const results = tupleMatches.map(tuple => {
                const inner = tuple.replace(/^\(|\)$/g, "");
                const vals = inner.split(",").map(v => v.trim().replace(/^['"]|['"]$/g, ""));
                const obj: Record<string, any> = {};
                cols.forEach((col, idx) => {
                    obj[col] = vals[idx] !== undefined ? vals[idx] : null;
                });
                return obj;
            });

            setJsonResult(JSON.stringify(results, null, 2));
        } catch {
            setJsonResult("Syntax error parsing SQL statement.");
        }
    };

    return (
        <div className="space-y-4">
            <textarea
                value={sql}
                onChange={e => setSql(e.target.value)}
                placeholder="Paste SQL INSERT INTO statement..."
                className="w-full h-40 p-4 border rounded-2xl font-mono text-sm"
            />
            <button onClick={convert} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs">
                Convert SQL to JSON
            </button>
            {jsonResult && (
                <pre className="p-4 bg-neutral-900 text-neutral-100 rounded-2xl font-mono text-xs overflow-x-auto max-h-72">
                    {jsonResult}
                </pre>
            )}
        </div>
    );
}
