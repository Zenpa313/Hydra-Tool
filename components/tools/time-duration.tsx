"use client";
import React, { useState } from "react";

export default function TimeDuration() {
    const [t1, setT1] = useState("09:00");
    const [t2, setT2] = useState("17:00");

    const getMinutes = (t: string) => {
        const [h, m] = t.split(":").map(Number);
        return h * 60 + m;
    };

    let diff = getMinutes(t2) - getMinutes(t1);
    if (diff < 0) diff += 1440;
    
    const h = Math.floor(diff / 60);
    const m = diff % 60;

    return (
        <div className="grid grid-cols-2 gap-4">
            <input type="time" value={t1} onChange={e => setT1(e.target.value)} className="p-3 border rounded-xl" />
            <input type="time" value={t2} onChange={e => setT2(e.target.value)} className="p-3 border rounded-xl" />
            <div className="col-span-2 p-6 bg-blue-50 text-center rounded-xl font-bold text-blue-700">
                Duration: {h} hours and {m} minutes
            </div>
        </div>
    );
}
