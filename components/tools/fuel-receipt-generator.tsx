"use client";
import React, { useState } from "react";
export default function FuelReceiptGenerator() {
    const [station, setStation] = useState("Bharat Petroleum - Main St");
    const [amount, setAmount] = useState(500);
    const [rate, setRate] = useState(105.5);
    const volume = (amount / rate).toFixed(2);
    return (
        <div className="space-y-4">
            <input className="w-full p-2 border rounded" value={station} onChange={e => setStation(e.target.value)} />
            <input type="number" className="w-full p-2 border rounded" value={amount} onChange={e => setAmount(Number(e.target.value))} />
            <div className="p-4 border rounded font-mono">
                <p>Station: {station}</p>
                <p>Volume: {volume} L</p>
                <p>Total: ${amount.toFixed(2)}</p>
            </div>
        </div>
    );
}
