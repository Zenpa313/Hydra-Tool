"use client";
import { useState } from "react";
export default function JSONminifier() {
    
    const [input, setInput] = useState("");
    const minify = () => { try { setOutput(JSON.stringify(JSON.parse(input))); } catch (e) { setOutput("Invalid JSON"); } };
    const [output, setOutput] = useState("");
    return (
        <div className="space-y-4">
            <textarea className="w-full h-40 p-3 border rounded-xl font-mono text-xs" onChange={e => setInput(e.target.value)} placeholder="Paste JSON here..." />
            <button onClick={minify} className="px-6 py-2 bg-blue-600 text-white rounded-lg">Minify JSON</button>
            <pre className="p-4 bg-gray-100 rounded-lg overflow-x-auto text-xs">{output}</pre>
        </div>
    );
}