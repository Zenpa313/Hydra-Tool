"use client";
import { useState } from "react";

export default function UnitSpeed() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const process = () => {
        setOutput(btoa(input || "sample"));
    };

    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Input</label>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter input..."
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
            </div>
            <button 
                onClick={process}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition shadow-lg shadow-blue-500/20"
            >
                Execute
            </button>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Result</span>
                <div className="text-lg text-white font-mono mt-2 min-h-[3rem] break-all">{output || "Result will appear here..."}</div>
            </div>
        </div>
    );
}
