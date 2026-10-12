"use client";
import { useState } from "react";
export default function CssGradient() {
    const [color1, setColor1] = useState("#3b82f6");
    const [color2, setColor2] = useState("#8b5cf6");
    const styleString = `linear-gradient(90deg, ${color1}, ${color2})`;
    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <input type="color" value={color1} onChange={e => setColor1(e.target.value)} />
                <input type="color" value={color2} onChange={e => setColor2(e.target.value)} />
            </div>
            <div className="h-32 rounded-xl" style={{ background: styleString }}></div>
            <code className="block p-4 bg-gray-100 rounded text-sm">background: {styleString};</code>
        </div>
    );
}