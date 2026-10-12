"use client";
import React, { useState } from "react";

export default function TableToCsv() {
    const [html, setHtml] = useState("<table>\n  <tr><th>Month</th><th>Savings</th></tr>\n  <tr><td>January</td><td>$100</td></tr>\n  <tr><td>February</td><td>$80</td></tr>\n</table>");
    const [csv, setCsv] = useState("");

    const convert = () => {
        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const rows = Array.from(doc.querySelectorAll("tr"));
            const csvRows = rows.map(r => {
                const cells = Array.from(r.querySelectorAll("th, td"));
                return cells.map(c => `"${c.textContent?.trim().replace(/"/g, '""')}"`).join(",");
            });
            setCsv(csvRows.join("\n"));
        } catch {
            setCsv("Invalid HTML Table format");
        }
    };

    return (
        <div className="space-y-4">
            <textarea
                value={html}
                onChange={e => setHtml(e.target.value)}
                placeholder="Paste HTML table source code here..."
                className="w-full h-40 p-4 border rounded-2xl font-mono text-sm"
            />
            <button onClick={convert} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs">
                Extract Table to CSV
            </button>
            {csv && (
                <pre className="p-4 bg-neutral-50 border rounded-2xl font-mono text-xs whitespace-pre-wrap">{csv}</pre>
            )}
        </div>
    );
}
