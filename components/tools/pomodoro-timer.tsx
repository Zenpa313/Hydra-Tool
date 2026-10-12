"use client";
import React, { useState, useEffect, useRef } from "react";

export default function PomodoroTimer() {
    const [seconds, setSeconds] = useState(1500); // 25 mins
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState<"focus" | "break">("focus");
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isActive && seconds > 0) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => prev - 1);
            }, 1000);
        } else if (seconds === 0) {
            setIsActive(false);
            const nextMode = mode === "focus" ? "break" : "focus";
            setMode(nextMode);
            setSeconds(nextMode === "focus" ? 1500 : 300);
            alert(nextMode === "focus" ? "Break finished! Back to focus." : "Focus finished! Take a break.");
        }
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [isActive, seconds, mode]);

    const format = (s: number) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

    return (
        <div className="flex flex-col items-center justify-center space-y-8 p-8 bg-white border rounded-2xl">
            <div className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${mode === 'focus' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {mode} mode
            </div>
            <span className="text-8xl font-black font-mono text-neutral-900 tracking-tight">{format(seconds)}</span>
            <div className="flex gap-4">
                <button onClick={() => setIsActive(!isActive)} className="px-8 py-3 bg-neutral-900 text-white rounded-xl font-bold transition">
                    {isActive ? "Pause" : "Start Timer"}
                </button>
                <button onClick={() => { setIsActive(false); setSeconds(mode === "focus" ? 1500 : 300); }} className="px-8 py-3 border border-neutral-300 rounded-xl font-bold hover:bg-neutral-50 transition">
                    Reset
                </button>
            </div>
        </div>
    );
}
