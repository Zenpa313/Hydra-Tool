"use client";
import React, { useState } from "react";

export default function StaircaseCalculator() {
    const [totalRise, setTotalRise] = useState(100);
    const [idealRiser, setIdealRiser] = useState(7.5);
    const [tread, setTread] = useState(10);

    const numSteps = Math.ceil(totalRise / idealRiser);
    const actualRiser = totalRise / numSteps;
    const stringer = Math.sqrt(totalRise**2 + (numSteps * tread)**2);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <input type="number" value={totalRise} onChange={e => setTotalRise(Number(e.target.value))} className="w-full p-2 border rounded-xl" placeholder="Total Rise (in)"/>
                <input type="number" value={idealRiser} onChange={e => setIdealRiser(Number(e.target.value))} className="w-full p-2 border rounded-xl" placeholder="Ideal Riser (in)"/>
            </div>
            <div className="text-center text-2xl font-black text-blue-600">{numSteps} Steps @ {actualRiser.toFixed(2)}in Rise</div>
        </div>
    );
}
