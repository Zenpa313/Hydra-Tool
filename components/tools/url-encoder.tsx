"use client";
import { useState } from "react";
export default function Urlencoder() {
    
    const [input, setInput] = useState("");
    return (
        <div className="space-y-4">
            <input className="w-full p-3 border rounded-xl" onChange={e => setInput(e.target.value)} />
            <div className="p-4 bg-gray-100 rounded-lg break-all">{encodeURIComponent(input)}</div>
        </div>
    );
}