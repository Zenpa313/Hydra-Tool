"use client";
import React, { useState } from "react";

export default function RoofPitchCalculator() {
    const [rise, setRise] = useState(4);
    const [run, setRun] = useState(12);

    const angle = Math.atan(rise / run) * (180 / Math.PI);
    const rafterLen = Math.sqrt(rise**2 + run**2);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <input type="number" value={rise} onChange={e => setRise(Number(e.target.value))} className="w-full p-2 border rounded-xl" placeholder="Rise (in)"/>
                <input type="number" value={run} onChange={e => setRun(Number(e.target.value))} className="w-full p-2 border rounded-xl" placeholder="Run (in)"/>
            </div>
            <div className="text-center text-4xl font-black text-blue-600">{angle.toFixed(1)} Degrees</div>
        </div>
    );
}
