"use client";
import { useState } from "react";
export default function ConcreteVolume() {
    const [l, setL] = useState(0); const [w, setW] = useState(0); const [d, setD] = useState(0.33); // 4 inches depth default
    const volume = (l * w * d) / 27; // cubic yards
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="number" placeholder="Length (ft)" className="w-full p-3 border rounded-xl" onChange={e => setL(Number(e.target.value))} />
                <input type="number" placeholder="Width (ft)" className="w-full p-3 border rounded-xl" onChange={e => setW(Number(e.target.value))} />
                <input type="number" placeholder="Depth/Thickness (ft)" defaultValue={0.33} className="w-full p-3 border rounded-xl" onChange={e => setD(Number(e.target.value))} />
            </div>
            <div className="text-xl font-bold p-4 bg-blue-50 rounded-lg text-blue-900 border border-blue-200">
                Amount Required: {volume.toFixed(2)} Cubic Yards
            </div>
        </div>
    );
}