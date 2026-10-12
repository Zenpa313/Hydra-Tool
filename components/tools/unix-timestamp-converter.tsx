"use client";
import React, { useState } from "react";

export default function UnixTimestampConverter() {
    const [ts, setTs] = useState(Math.floor(Date.now() / 1000).toString());
    const date = new Date(parseInt(ts) * 1000);

    return (
        <div className="space-y-4">
            <input type="text" value={ts} onChange={e => setTs(e.target.value)} className="w-full p-3 border rounded-xl font-mono text-sm" />
            <div className="p-4 bg-neutral-50 rounded-xl border text-sm font-semibold">
                {isNaN(date.getTime()) ? "Invalid Timestamp" : date.toLocaleString()}
            </div>
        </div>
    );
}
