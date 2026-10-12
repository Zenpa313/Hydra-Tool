"use client";
import { useState } from "react";

export default function ConcreteVolume() {
    const [l, setL] = useState(0);
    const [w, setW] = useState(0);
    const [h, setH] = useState(0);
    
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
                <input type="number" placeholder="Length (ft)" className="p-2 border rounded" onChange={e => setL(Number(e.target.value))} />
                <input type="number" placeholder="Width (ft)" className="p-2 border rounded" onChange={e => setW(Number(e.target.value))} />
                <input type="number" placeholder="Depth/Thickness (ft)" className="p-2 border rounded" onChange={e => setH(Number(e.target.value))} />
            </div>
            <div className="text-xl font-bold p-4 bg-gray-100 rounded">
                Result: {(l * w * h).toFixed(2)} cubic feet of concrete
            </div>
        </div>
    );
}
