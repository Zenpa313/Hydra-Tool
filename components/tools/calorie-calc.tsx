"use client";
import { useState } from "react";
export default function Caloriecalc() {
    
    const [w, setW] = useState(70); const [h, setH] = useState(175); const [a, setA] = useState(25);
    const bmr = 88.36 + (13.4 * w) + (4.8 * h) - (5.7 * a);
    return (
        <div className="space-y-4">
            <input type="number" placeholder="Weight (kg)" className="w-full p-3 border rounded" onChange={e => setW(Number(e.target.value))} />
            <input type="number" placeholder="Height (cm)" className="w-full p-3 border rounded" onChange={e => setH(Number(e.target.value))} />
            <input type="number" placeholder="Age" className="w-full p-3 border rounded" onChange={e => setA(Number(e.target.value))} />
            <div className="p-4 bg-gray-100 rounded-lg">BMR: {bmr.toFixed(0)} kcal/day</div>
        </div>
    );
}
