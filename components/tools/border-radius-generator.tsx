"use client";
import React, { useState } from "react";

export default function BorderRadiusGenerator() {
    const [tl, setTl] = useState(24);
    const [tr, setTr] = useState(24);
    const [br, setBr] = useState(24);
    const [bl, setBl] = useState(24);

    const radiusCss = `${tl}px ${tr}px ${br}px ${bl}px`;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Top-Left ({tl}px)</label>
                        <input type="range" min="0" max="100" value={tl} onChange={e => setTl(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Top-Right ({tr}px)</label>
                        <input type="range" min="0" max="100" value={tr} onChange={e => setTr(Number(e.target.value))} className="w-full" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Bottom-Left ({bl}px)</label>
                        <input type="range" min="0" max="100" value={bl} onChange={e => setBl(Number(e.target.value))} className="w-full" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Bottom-Right ({br}px)</label>
                        <input type="range" min="0" max="100" value={br} onChange={e => setBr(Number(e.target.value))} className="w-full" />
                    </div>
                </div>
                <div className="p-4 bg-neutral-900 text-neutral-100 font-mono text-xs rounded-xl">border-radius: {radiusCss};</div>
            </div>

            <div className="flex items-center justify-center p-12 bg-neutral-50 rounded-2xl border">
                <div style={{ borderRadius: radiusCss }} className="w-48 h-48 bg-blue-600 shadow-xl transition-all" />
            </div>
        </div>
    );
}
