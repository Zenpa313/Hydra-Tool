"use client";
import { useState } from "react";
export default function Base64Decoder() {
    
    const [input, setInput] = useState("");
    return (
        <div className="space-y-4">
            <input className="w-full p-3 border rounded-xl" onChange={e => setInput(e.target.value)} placeholder="Base64 to decode" />
            <div className="p-4 bg-gray-100 rounded-lg break-all">{try{atob(input)}catch{ "Invalid Base64" }}</div>
        </div>
    );
}