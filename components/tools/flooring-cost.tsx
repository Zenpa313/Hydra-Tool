"use client";
import { useState } from "react";
export default function FlooringCost() {
    const [area, setArea] = useState(0); const [price, setPrice] = useState(0);
    const total = area * price * 1.1; // 10% waste buffer
    return (
        <div className="space-y-4">
            <input type="number" placeholder="Area (sq ft)" className="w-full p-3 border rounded-xl" onChange={e => setArea(Number(e.target.value))} />
            <input type="number" placeholder="Price per sq ft" className="w-full p-3 border rounded-xl" onChange={e => setPrice(Number(e.target.value))} />
            <div className="text-xl font-bold p-4 bg-green-50 rounded-lg text-green-900 border border-green-200">
                Total Estimate (inc. 10% waste): ${total.toFixed(2)}
            </div>
        </div>
    );
}