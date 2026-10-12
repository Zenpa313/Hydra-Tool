
"use client";
import { useState } from "react";

export default function WordCounter() {
    const [text, setText] = useState("");
    const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    
    return (
        <div className="p-4 border rounded shadow-sm bg-white">
            <textarea 
                className="w-full h-40 p-2 border rounded"
                placeholder="Type or paste your text here..."
                onChange={(e) => setText(e.target.value)}
            />
            <div className="mt-2 font-bold">Words: {wordCount}</div>
        </div>
    );
}
