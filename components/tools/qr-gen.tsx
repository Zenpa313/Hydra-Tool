"use client";
import { useState } from "react";
// Simple browser-only QR implementation stub - requires library or API
export default function QrGen() {
    const [val, setVal] = useState("https://hydratools.com");
    return (
        <div className="space-y-4">
            <input className="w-full p-2 border rounded" onChange={e => setVal(e.target.value)} />
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(val)}`} alt="QR" />
        </div>
    );
}