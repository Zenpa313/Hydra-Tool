"use client";
import { useState } from "react";
export default function JSONformatter() {
    
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const format = () => { try { setOutput(JSON.stringify(JSON.parse(input), null, 4)); } catch (e) { setOutput("Invalid JSON"); } };
    return (
        <div className="space-y-4">
            <textarea className="w-full h-40 p-3 border rounded-xl font-mono text-xs" onChange={e => setInput(e.target.value)} placeholder="Paste JSON here..." />
            <button onClick={format} className="px-6 py-2 bg-blue-600 text-white rounded-lg">Format JSON</button>
            <pre className="p-4 bg-gray-100 rounded-lg overflow-x-auto text-xs">{output}</pre>
        </div>
    );
}