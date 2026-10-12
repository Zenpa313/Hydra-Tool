"use client";
import React, { useState } from "react";

export default function DataVisualizer() {
    const [data, setData] = useState("Q1, 120\nQ2, 190\nQ3, 85\nQ4, 240");
    const [chartType, setChartType] = useState<"bar" | "line">("bar");

    const rows = data.trim().split("\n").map(line => {
        const [label, val] = line.split(",");
        return { label: label ? label.trim() : "", val: parseFloat(val ? val.trim() : "0") || 0 };
    });

    const maxVal = Math.max(...rows.map(r => r.val), 1);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Data (Label, Value)</label>
                <textarea
                    rows={6}
                    value={data}
                    onChange={e => setData(e.target.value)}
                    className="w-full p-3 border rounded-xl font-mono text-sm"
                />
                <div className="flex gap-2">
                    {["bar", "line"].map(t => (
                        <button
                            key={t}
                            onClick={() => setChartType(t as any)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold capitalize border ${chartType === t ? "bg-blue-600 text-white border-blue-600" : "bg-white"}`}
                        >
                            {t} Chart
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-8 bg-neutral-50 border rounded-2xl flex flex-col justify-end space-y-4 min-h-[300px]">
                <div className="flex items-end justify-around gap-2 h-48 border-b pb-2">
                    {rows.map((r, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                            <span className="text-[10px] font-bold font-mono text-neutral-600">{r.val}</span>
                            <div
                                style={{ height: `${(r.val / maxVal) * 100}%` }}
                                className="w-full max-w-[48px] bg-blue-600 rounded-t-lg transition-all"
                            />
                            <span className="text-xs font-semibold text-neutral-500 truncate w-full text-center">{r.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
