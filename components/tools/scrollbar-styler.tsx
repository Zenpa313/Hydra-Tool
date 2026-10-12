"use client";
import React, { useState } from "react";

export default function ScrollbarStyler() {
    const [thumb, setThumb] = useState("#3b82f6");
    const [track, setTrack] = useState("#f1f5f9");
    const [width, setWidth] = useState(10);
    const [radius, setRadius] = useState(8);

    const cssCode = `/* WebKit browsers (Chrome, Safari, Edge) */\n::-webkit-scrollbar {\n  width: ${width}px;\n}\n::-webkit-scrollbar-track {\n  background: ${track};\n}\n::-webkit-scrollbar-thumb {\n  background: ${thumb};\n  border-radius: ${radius}px;\n}\n\n/* Firefox */\n* {\n  scrollbar-width: thin;\n  scrollbar-color: ${thumb} ${track};\n}`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Thumb Color</label>
                        <input type="color" value={thumb} onChange={e => setThumb(e.target.value)} className="w-full h-9 rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Track Color</label>
                        <input type="color" value={track} onChange={e => setTrack(e.target.value)} className="w-full h-9 rounded-lg" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Width ({width}px)</label>
                        <input type="range" min="4" max="24" value={width} onChange={e => setWidth(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Radius ({radius}px)</label>
                        <input type="range" min="0" max="20" value={radius} onChange={e => setRadius(Number(e.target.value))} className="w-full" />
                    </div>
                </div>
                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl whitespace-pre-wrap">{cssCode}</div>
            </div>

            <div className="p-6 bg-neutral-100 rounded-2xl border">
                <div className="h-64 overflow-y-scroll p-4 bg-white rounded-xl border space-y-4 text-xs text-neutral-600">
                    <p className="font-bold text-neutral-900">Custom Scrollbar Container Preview</p>
                    <p>Scroll down inside this box to test the styled scrollbar thumb and track.</p>
                    <p>Repeated paragraph for scroll testing. Modern browsers like Chrome and Safari will render custom WebKit styles.</p>
                    <p>More content to create overflow in the container.</p>
                    <p>Almost at the bottom of the container.</p>
                    <p>End of test content.</p>
                </div>
            </div>
        </div>
    );
}
