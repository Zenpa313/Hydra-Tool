"use client";
import React, { useState } from "react";
export default function WifiBillGenerator() {
    const [provider, setProvider] = useState("ISP Name");
    const [amt, setAmt] = useState(30);
    return (
        <div className="space-y-4">
            <input className="w-full p-2 border rounded" value={provider} onChange={e => setProvider(e.target.value)} />
            <div className="p-4 border rounded">Bill from {provider}: ${amt} due</div>
        </div>
    );
}
