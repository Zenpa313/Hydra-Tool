"use client";
import React, { useState } from "react";

export default function TextCompare() {
    const [text1, setText1] = useState("Original document text version A");
    const [text2, setText2] = useState("Original document text version B");

    const lines1 = text1.split("\n");
    const lines2 = text2.split("\n");

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Text Version 1</label>
                    <textarea rows={6} value={text1} onChange={e => setText1(e.target.value)} className="w-full p-3 border rounded-xl font-mono text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Text Version 2</label>
                    <textarea rows={6} value={text2} onChange={e => setText2(e.target.value)} className="w-full p-3 border rounded-xl font-mono text-sm" />
                </div>
            </div>
            <div className="p-4 bg-neutral-50 border rounded-xl text-center text-xs font-bold text-neutral-700">
                {text1 === text2 ? "Texts are 100% Identical" : `Difference detected: Lengths ${text1.length} vs ${text2.length} characters`}
            </div>
        </div>
    );
}
