"use client";
import { useState } from "react";
export default function AspectCalc() {
    const [w, setW] = useState(1920);
    const [ratioW, setRatioW] = useState(16);
    const [ratioH, setRatioH] = useState(9);
    const h = (w * ratioH) / ratioW;
    return (
        <div className="space-y-4">
            <input className="w-full p-2 border rounded" type="number" onChange={e => setW(Number(e.target.value))} />
            <div className="flex gap-2">
                <input className="w-1/2 p-2 border rounded" type="number" placeholder="Ratio W" onChange={e => setRatioW(Number(e.target.value))} />
                <input className="w-1/2 p-2 border rounded" type="number" placeholder="Ratio H" onChange={e => setRatioH(Number(e.target.value))} />
            </div>
            <div className="p-4 bg-gray-100 rounded">Calculated Height: {h.toFixed(0)}px</div>
        </div>
    );
}