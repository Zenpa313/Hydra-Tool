"use client";
import React, { useState, useEffect, useRef } from "react";

export default function CountdownTimer() {
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const [timeLeft, setTimeLeft] = useState(300);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef<any>(null);

    useEffect(() => {
        if (!isRunning) {
            setTimeLeft(minutes * 60 + seconds);
        }
    }, [minutes, seconds, isRunning]);

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && isRunning) {
            setIsRunning(false);
            if (timerRef.current) clearInterval(timerRef.current);
            alert("Countdown complete!");
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isRunning, timeLeft]);

    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Minutes</label>
                        <input type="number" min="0" value={minutes} disabled={isRunning} onChange={e => setMinutes(Number(e.target.value))} className="w-full p-3 border rounded-xl text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Seconds</label>
                        <input type="number" min="0" max="59" value={seconds} disabled={isRunning} onChange={e => setSeconds(Number(e.target.value))} className="w-full p-3 border rounded-xl text-sm" />
                    </div>
                </div>
                <div className="flex gap-3 pt-2">
                    <button
                        onClick={() => setIsRunning(!isRunning)}
                        className={`flex-1 py-3 rounded-xl font-bold text-white transition ${isRunning ? "bg-amber-600 hover:bg-amber-700" : "bg-blue-600 hover:bg-blue-700"}`}
                    >
                        {isRunning ? "Pause Timer" : "Start Countdown"}
                    </button>
                    <button
                        onClick={() => { setIsRunning(false); setTimeLeft(minutes * 60 + seconds); }}
                        className="px-6 py-3 border border-neutral-300 rounded-xl text-xs font-bold hover:bg-neutral-100"
                    >
                        Reset
                    </button>
                </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                <span className="text-6xl sm:text-7xl font-black font-mono text-neutral-900 tracking-tight">
                    {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 mt-3">Time Remaining</span>
            </div>
        </div>
    );
}
