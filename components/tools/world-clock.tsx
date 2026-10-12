"use client";
import React, { useState, useEffect } from "react";

export default function WorldClock() {
    const [t, setT] = useState(new Date());
    useEffect(() => { const i = setInterval(() => setT(new Date()), 1000); return () => clearInterval(i); }, []);
    
    const zones = ["UTC", "America/New_York", "Europe/London", "Asia/Tokyo"];
    return (
        <div className="space-y-2">
            {zones.map(z => (
                <div key={z} className="p-3 bg-white border rounded-xl flex justify-between">
                    <span className="font-bold text-neutral-700">{z}</span>
                    <span className="font-mono text-sm">{t.toLocaleTimeString("en-US", { timeZone: z })}</span>
                </div>
            ))}
        </div>
    );
}
