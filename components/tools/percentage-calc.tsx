"use client";
import { useState } from "react";

export default function PercentageCalc() {
    const [part, setPart] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const percentage = total !== 0 ? ((part / total) * 100).toFixed(2) : "0.00";
    
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Part</label>
                    <input 
                        type="number" 
                        value={part} 
                        onChange={(e) => setPart(Number(e.target.value))}
                        className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Total</label>
                    <input 
                        type="number" 
                        value={total} 
                        onChange={(e) => setTotal(Number(e.target.value))}
                        className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-2xl p-6 text-center">
                <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Result</span>
                <div className="text-4xl font-extrabold text-white mt-2">{percentage}%</div>
            </div>
        </div>
    );
}
