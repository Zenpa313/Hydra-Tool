"use client";
import { useState } from "react";
export default function Base64Encoder() {
    
    const [input, setInput] = useState("");
    return (
        <div className="space-y-4">
            <input className="w-full p-3 border rounded-xl" onChange={e => setInput(e.target.value)} placeholder="Text to encode" />
            <div className="p-4 bg-gray-100 rounded-lg break-all">{btoa(input)}</div>
        </div>
    );
}