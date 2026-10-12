"use client";
import React, { useState } from "react";

export default function TailwindColorReference() {
    const [search, setSearch] = useState("");
    const colors = [
        { name: "slate", hexes: ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b", "#0f172a"] },
        { name: "red", hexes: ["#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d"] },
        { name: "blue", hexes: ["#eff6ff", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a"] },
        { name: "emerald", hexes: ["#ecfdf5", "#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981", "#059669", "#047857", "#065f46", "#064e3b"] },
        { name: "amber", hexes: ["#fffbeb", "#fef3c7", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f"] },
        { name: "purple", hexes: ["#faf5ff", "#f3e8ff", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7", "#9333ea", "#7e22ce", "#6b21a8", "#581c87"] },
    ];

    const filtered = colors.filter(c => c.name.includes(search.toLowerCase()));

    return (
        <div className="space-y-6">
            <input
                type="text"
                placeholder="Search Tailwind color family (e.g. blue, red)..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full p-3 border rounded-xl text-sm"
            />
            <div className="space-y-6">
                {filtered.map(group => (
                    <div key={group.name} className="space-y-2">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-600 capitalize">{group.name}</h4>
                        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                            {group.hexes.map((hex, idx) => (
                                <div
                                    key={hex}
                                    onClick={() => navigator.clipboard.writeText(hex)}
                                    className="p-2 rounded-xl text-center cursor-pointer border hover:scale-105 transition"
                                >
                                    <div style={{ backgroundColor: hex }} className="h-10 rounded-lg shadow-inner mb-1" />
                                    <span className="text-[10px] font-mono block text-neutral-500 font-bold">{hex}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
