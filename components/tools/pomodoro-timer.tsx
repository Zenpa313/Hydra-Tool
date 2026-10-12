"use client";
import { useState, useEffect } from "react";

export default function PomodoroTimer() {
    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isActive && time > 0) interval = setInterval(() => setTime(t => t - 1), 1000);
        return () => clearInterval(interval);
    }, [isActive, time]);

    return (
        <div className="text-center space-y-6">
            <div className="text-6xl font-mono text-blue-500">{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}</div>
            <button onClick={() => setIsActive(!isActive)} className="px-8 py-3 bg-blue-600 rounded-xl text-white">
                {isActive ? "Pause" : "Start"}
            </button>
        </div>
    );
}
