"use client";
import { useState } from "react";
export default function Profitmargin() {
    
    const [cost, setCost] = useState(10); const [price, setPrice] = useState(15);
    const margin = ((price - cost) / price) * 100;
    return (
        <div className="space-y-4">
            <input type="number" placeholder="Cost Price ($)" className="w-full p-3 border rounded" onChange={e => setCost(Number(e.target.value))} />
            <input type="number" placeholder="Selling Price ($)" className="w-full p-3 border rounded" onChange={e => setPrice(Number(e.target.value))} />
            <div className="p-4 bg-gray-100 rounded-lg">Profit Margin: {margin.toFixed(2)}%</div>
        </div>
    );
}
