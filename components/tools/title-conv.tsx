"use client";
import { useState } from "react";
export default function Titleconv() {
    
    const [text, setText] = useState("");
    const result = text.toUpperCase();
    return (
        <div className="space-y-4">
            <input className="w-full p-3 border rounded-xl" onChange={e => setText(e.target.value)} />
            <div className="p-4 bg-gray-100 rounded-lg break-all">{result}</div>
        </div>
    );
}