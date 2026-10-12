"use client";
import { useState } from "react";

export default function Base64Encoder() {
    const [text, setText] = useState("");
    return (
        <div className="space-y-4">
            <textarea onChange={e => setText(e.target.value)} className="w-full p-2 border rounded" placeholder="Input text..." />
            <div className="p-4 bg-gray-100 rounded font-mono break-all">{btoa(text) || "Result"}</div>
        </div>
    );
}
