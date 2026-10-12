"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Stopwatch() {
    const [ms, setMs] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [laps, setLaps] = useState<number[]>([]);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                setMs(prev => prev + 10);
            }, 10);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [isActive]);

    const format = (totalMs: number) => {
        const h = Math.floor(totalMs / 3600000);
        const m = Math.floor((totalMs % 3600000) / 60000);
        const s = Math.floor((totalMs % 60000) / 1000);
        const ms = Math.floor((totalMs % 1000) / 10);
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(ms).padStart(2, '0')}`;
    };

    return (
        <div className="space-y-6">
            <div className="text-center">
                <span className="text-7xl font-black font-mono tracking-tight">{format(ms)}</span>
            </div>
            <div className="flex justify-center gap-3">
                <button onClick={() => setIsActive(!isActive)} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold text-sm">
                    {isActive ? "Pause" : "Start"}
                </button>
                <button onClick={() => { setLaps([...laps, ms]); }} className="px-6 py-2 bg-neutral-200 rounded-lg font-bold text-sm">
                    Lap
                </button>
                <button onClick={() => { setIsActive(false); setMs(0); setLaps([]); }} className="px-6 py-2 border rounded-lg font-bold text-sm">
                    Reset
                </button>
            </div>
            {laps.length > 0 && (
                <div className="mt-4 p-4 bg-neutral-50 rounded-xl border max-h-40 overflow-y-auto">
                    {laps.map((l, i) => <div key={i} className="text-xs font-mono py-1">Lap {i+1}: {format(l)}</div>)}
                </div>
            )}
        </div>
    );
}
