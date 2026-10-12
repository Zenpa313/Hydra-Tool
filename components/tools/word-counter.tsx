"use client";
import { useState } from "react";
export default function Wordcounter() {
    
    const [text, setText] = useState("");
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    const chars = text.length;
    return (
        <div className="space-y-4">
            <textarea className="w-full h-40 p-3 border rounded-xl" onChange={e => setText(e.target.value)} />
            <div className="flex gap-4 p-4 bg-gray-100 rounded">
                <div>Words: {words}</div>
                <div>Chars: {chars}</div>
            </div>
        </div>
    );
}