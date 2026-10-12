"use client";
import React, { useState } from "react";

export default function LumberCalculator() {
    const [qty, setQty] = useState(10);
    const [thk, setThk] = useState(2);
    const [wid, setWid] = useState(4);
    const [len, setLen] = useState(8);

    const boardFeet = (thk * wid * len) / 12;
    const total = boardFeet * qty;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-3">
                <input type="number" value={qty} onChange={e => setQty(Number(e.target.value))} className="w-full p-2 border rounded-xl" placeholder="Qty"/>
                <input type="number" value={thk} onChange={e => setThk(Number(e.target.value))} className="w-full p-2 border rounded-xl" placeholder="Thickness"/>
                <input type="number" value={wid} onChange={e => setWid(Number(e.target.value))} className="w-full p-2 border rounded-xl" placeholder="Width"/>
                <input type="number" value={len} onChange={e => setLen(Number(e.target.value))} className="w-full p-2 border rounded-xl" placeholder="Length"/>
            </div>
            <div className="text-center text-4xl font-black text-blue-600">{total.toFixed(2)} Board Feet</div>
        </div>
    );
}
