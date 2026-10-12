"use client";
import { useState } from "react";

export default function ProfitMargin() {
    const [cost, setCost] = useState(0);
    const [price, setPrice] = useState(0);
    const margin = price > 0 ? ((price - cost) / price) * 100 : 0;
    
    return (
        <div className="space-y-4">
            <input type="number" placeholder="Cost Price" className="w-full p-2 border rounded" onChange={e => setCost(Number(e.target.value))} />
            <input type="number" placeholder="Selling Price" className="w-full p-2 border rounded" onChange={e => setPrice(Number(e.target.value))} />
            <div className="text-xl font-bold p-4 bg-gray-100 rounded">
                Profit Margin: {margin.toFixed(2)}%
            </div>
        </div>
    );
}
