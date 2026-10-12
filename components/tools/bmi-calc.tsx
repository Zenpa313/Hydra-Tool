"use client";
import { useState } from "react";
export default function Bmicalc() {
    
    const [h, setH] = useState(175); const [w, setW] = useState(70);
    const bmi = (w / ((h/100) * (h/100))).toFixed(1);
    return (
        <div className="space-y-4">
            <input type="number" placeholder="Height (cm)" className="w-full p-3 border rounded" onChange={e => setH(Number(e.target.value))} />
            <input type="number" placeholder="Weight (kg)" className="w-full p-3 border rounded" onChange={e => setW(Number(e.target.value))} />
            <div className="p-4 bg-gray-100 rounded-lg">BMI: {bmi}</div>
        </div>
    );
}
