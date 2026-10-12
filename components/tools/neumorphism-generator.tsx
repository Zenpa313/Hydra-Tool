"use client";
import React, { useState } from "react";

export default function NeumorphismGenerator() {
    const [size, setSize] = useState(160);
    const [radius, setRadius] = useState(30);
    const [distance, setDistance] = useState(15);
    const [blur, setBlur] = useState(30);

    const shadow = `${distance}px ${distance}px ${blur}px #bebebe, -${distance}px -${distance}px ${blur}px #ffffff`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Distance ({distance}px)</label>
                    <input type="range" min="5" max="30" value={distance} onChange={e => setDistance(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Blur ({blur}px)</label>
                    <input type="range" min="10" max="60" value={blur} onChange={e => setBlur(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Radius ({radius}px)</label>
                    <input type="range" min="0" max="80" value={radius} onChange={e => setRadius(Number(e.target.value))} className="w-full" />
                </div>
                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl whitespace-pre-wrap">
                    {`background: #e0e0e0;\nborder-radius: ${radius}px;\nbox-shadow: ${shadow};`}
                </div>
            </div>

            <div className="flex items-center justify-center p-12 bg-[#e0e0e0] rounded-2xl border">
                <div
                    style={{ width: `${size}px`, height: `${size}px`, borderRadius: `${radius}px`, boxShadow: shadow, backgroundColor: "#e0e0e0" }}
                    className="flex items-center justify-center font-bold text-xs text-neutral-500"
                >
                    Soft UI
                </div>
            </div>
        </div>
    );
}
