"use client";
import { useState } from "react";

export default function JSONFormatter() {
    const [json, setJson] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");

    const format = () => {
        try {
            const parsed = JSON.parse(json);
            setOutput(JSON.stringify(parsed, null, 4));
            setError("");
        } catch (e) {
            setError("Invalid JSON");
        }
    }
    
    return (
        <div className="space-y-4">
            <textarea className="w-full h-32 p-2 border rounded" placeholder="Paste JSON here" onChange={(e) => setJson(e.target.value)} />
            <button onClick={format} className="bg-blue-600 text-white p-2 rounded">Format JSON</button>
            {error && <div className="text-red-500">{error}</div>}
            <pre className="p-4 bg-gray-100 rounded overflow-auto">{output}</pre>
        </div>
    );
}
