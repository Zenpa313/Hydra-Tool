"use client";
import React, { useState } from "react";

export default function BrickCalculator() {
    const [w, setW] = useState(10);
    const [h, setH] = useState(8);
    const [bL, setBL] = useState(8); // brick length
    const [bH, setBH] = useState(2.25); // brick height
    const [joint, setJoint] = useState(0.375);
    const [waste, setWaste] = useState(10);

    // Calc
    const area = w * h * 144;
    const brickWithMortar = (bL + joint) * (bH + joint);
    const bricks = area / brickWithMortar;
    const total = Math.ceil(bricks * (1 + waste / 100));

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div><label className="block text-xs font-bold text-neutral-500 uppercase">Wall Width (ft)</label>
                    <input type="number" value={w} onChange={e => setW(Number(e.target.value))} className="w-full p-2 border rounded-xl"/></div>
                    <div><label className="block text-xs font-bold text-neutral-500 uppercase">Wall Height (ft)</label>
                    <input type="number" value={h} onChange={e => setH(Number(e.target.value))} className="w-full p-2 border rounded-xl"/></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div><label className="block text-xs font-bold text-neutral-500 uppercase">Brick Length (in)</label>
                    <input type="number" value={bL} onChange={e => setBL(Number(e.target.value))} className="w-full p-2 border rounded-xl"/></div>
                    <div><label className="block text-xs font-bold text-neutral-500 uppercase">Brick Height (in)</label>
                    <input type="number" value={bH} onChange={e => setBH(Number(e.target.value))} className="w-full p-2 border rounded-xl"/></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div><label className="block text-xs font-bold text-neutral-500 uppercase">Mortar Joint (in)</label>
                    <input type="number" step="0.1" value={joint} onChange={e => setJoint(Number(e.target.value))} className="w-full p-2 border rounded-xl"/></div>
                    <div><label className="block text-xs font-bold text-neutral-500 uppercase">Waste Factor (%)</label>
                    <input type="number" value={waste} onChange={e => setWaste(Number(e.target.value))} className="w-full p-2 border rounded-xl"/></div>
                </div>
            </div>
            <div className="bg-neutral-50 border rounded-2xl p-8 text-center flex flex-col justify-center">
                <span className="text-sm font-bold text-neutral-400 uppercase">Total Bricks Required</span>
                <span className="text-6xl font-black text-blue-600 font-mono">{total}</span>
            </div>
        </div>
    );
}
