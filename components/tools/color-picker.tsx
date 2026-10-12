"use client";
import { useState } from "react";
export default function ColorPicker() {
    const [color, setColor] = useState("#3b82f6");
    return (
        <div className="space-y-4">
            <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-full h-32 rounded-xl cursor-pointer" />
            <div className="p-4 bg-neutral-900 text-white rounded-lg font-mono text-center">{color}</div>
        </div>
    );
}