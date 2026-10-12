"use client";
import { useState } from "react";

export default function CompoundInterest() {
    const [val1, setVal1] = useState<number>(100);
    const [val2, setVal2] = useState<number>(10);
    const result = (val1 * (1 + val2 / 100)).toFixed(2);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Base Value / Amount</label>
                    <input 
                        type="number" 
                        value={val1} 
                        onChange={(e) => setVal1(Number(e.target.value) || 0)}
                        className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Rate / Percentage (%)</label>
                    <input 
                        type="number" 
                        value={val2} 
                        onChange={(e) => setVal2(Number(e.target.value) || 0)}
                        className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-2xl p-6 text-center">
                <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Calculated Result</span>
                <div className="text-4xl font-extrabold text-white mt-2">{result}</div>
            </div>
        </div>
    );
}
