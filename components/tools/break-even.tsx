"use client";
import { useState } from "react";
export default function Breakeven() {
    
    const [fixed, setFixed] = useState(10000); const [price, setPrice] = useState(50); const [variable, setVariable] = useState(20);
    const breakEven = fixed / (price - variable);
    return (
        <div className="space-y-4">
            <input type="number" placeholder="Fixed Costs ($)" className="w-full p-3 border rounded" onChange={e => setFixed(Number(e.target.value))} />
            <input type="number" placeholder="Price per Unit ($)" className="w-full p-3 border rounded" onChange={e => setPrice(Number(e.target.value))} />
            <input type="number" placeholder="Variable Cost per Unit ($)" className="w-full p-3 border rounded" onChange={e => setVariable(Number(e.target.value))} />
            <div className="p-4 bg-gray-100 rounded-lg">Break-Even Units: {isFinite(breakEven) ? Math.ceil(breakEven) : 0}</div>
        </div>
    );
}
