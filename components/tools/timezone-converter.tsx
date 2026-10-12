"use client";
import React, { useState } from "react";

export default function TimezoneConverter() {
    const [time, setTime] = useState(new Date().toTimeString().slice(0, 5));
    const zones = ["UTC", "America/New_York", "Europe/London", "Asia/Tokyo"];

    return (
        <div className="space-y-4">
            <input type="time" value={time} onChange={e => setTime(e.target.value)} className="w-full p-3 border rounded-xl" />
            {zones.map(z => (
                <div key={z} className="p-3 bg-white border rounded-xl flex justify-between">
                    <span>{z}</span>
                    <span className="font-mono font-bold">{new Date().toLocaleTimeString("en-US", { timeZone: z, hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            ))}
        </div>
    );
}
