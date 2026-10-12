"use client";
import { useState } from "react";

export default function WordCounter() {
    const [text, setText] = useState("");
    const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    const charCount = text.length;
    
    return (
        <div className="space-y-4">
            <textarea 
                className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Type or paste your text here..."
                onChange={(e) => setText(e.target.value)}
            />
            <div className="flex gap-4">
                <div className="font-bold text-lg bg-blue-100 p-3 rounded">Words: {wordCount}</div>
                <div className="font-bold text-lg bg-green-100 p-3 rounded">Characters: {charCount}</div>
            </div>
        </div>
    );
}