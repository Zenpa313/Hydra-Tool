"use client";
import React, { useState } from "react";

export default function MulchSoilCalculator() {
    const [len, setLen] = useState(20);
    const [wid, setWid] = useState(10);
    const [depth, setDepth] = useState(3);
    const [bagSize, setBagSize] = useState(2);

    const volumeYards = (len * wid * (depth / 12)) / 27;
    const bags = Math.ceil((volumeYards * 27) / bagSize);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <input type="number" value={len} onChange={e => setLen(Number(e.target.value))} className="w-full p-2 border rounded-xl" placeholder="Len (ft)"/>
                <input type="number" value={wid} onChange={e => setWid(Number(e.target.value))} className="w-full p-2 border rounded-xl" placeholder="Wid (ft)"/>
                <input type="number" value={depth} onChange={e => setDepth(Number(e.target.value))} className="w-full p-2 border rounded-xl" placeholder="Depth (in)"/>
            </div>
            <div className="text-center text-4xl font-black text-blue-600">{volumeYards.toFixed(2)} Cubic Yards <br/>~{bags} Bags</div>
        </div>
    );
}
