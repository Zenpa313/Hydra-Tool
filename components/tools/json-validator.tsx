"use client";
import React, { useState } from "react";

export default function JsonValidator() {
    const [input, setInput] = useState('{\n  "status": "success",\n  "data": [1, 2, 3]\n}');
    const [status, setStatus] = useState<{ valid: boolean; message: string } | null>(null);

    const validate = () => {
        try {
            JSON.parse(input);
            setStatus({ valid: true, message: "Valid JSON! Syntactically well-formed." });
        } catch (err: any) {
            setStatus({ valid: false, message: err.message });
        }
    };

    return (
        <div className="space-y-4">
            <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-48 p-4 border rounded-2xl font-mono text-sm" />
            <button onClick={validate} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs">Validate JSON</button>
            {status && (
                <div className={`p-4 rounded-xl text-xs font-semibold ${status.valid ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                    {status.message}
                </div>
            )}
        </div>
    );
}
