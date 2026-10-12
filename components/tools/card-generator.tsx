"use client";
import React, { useState } from "react";

export default function CardGenerator() {
    const [title, setTitle] = useState("Pro Analytics Dashboard");
    const [desc, setDesc] = useState("Track your metrics and real-time revenue across global regions effortlessly.");
    const [radius, setRadius] = useState(16);
    const [padding, setPadding] = useState(24);
    const [border, setBorder] = useState(true);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Card Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Description</label>
                    <textarea rows={2} value={desc} onChange={e => setDesc(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Corner Radius ({radius}px)</label>
                        <input type="range" min="0" max="32" value={radius} onChange={e => setRadius(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Padding ({padding}px)</label>
                        <input type="range" min="12" max="48" value={padding} onChange={e => setPadding(Number(e.target.value))} className="w-full" />
                    </div>
                </div>
                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl">
                    {`border-radius: ${radius}px;\npadding: ${padding}px;\nbackground: #ffffff;\nbox-shadow: 0 4px 20px rgba(0,0,0,0.06);`}
                </div>
            </div>

            <div className="flex items-center justify-center p-8 bg-neutral-100 rounded-2xl border">
                <div
                    style={{ borderRadius: `${radius}px`, padding: `${padding}px` }}
                    className={`bg-white max-w-sm w-full shadow-lg ${border ? "border border-neutral-200" : ""}`}
                >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Featured</span>
                    <h4 className="font-extrabold text-lg text-neutral-900 mt-2 mb-1">{title}</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                    <button className="mt-4 w-full py-2 bg-neutral-900 text-white rounded-lg text-xs font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
}
