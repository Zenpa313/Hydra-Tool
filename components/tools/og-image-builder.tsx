"use client";
import React, { useState } from "react";

export default function OgImageBuilder() {
    const [title, setTitle] = useState("Scale Your Next-Gen SaaS Platform");
    const [desc, setDesc] = useState("Open-source browser utilities built with high-velocity developer ergonomics.");
    const [tag, setTag] = useState("Announcements");
    const [domain, setDomain] = useState("hydratools.com");

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-neutral-50 rounded-2xl border">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Header Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Tag / Category</label>
                    <input type="text" value={tag} onChange={e => setTag(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Description</label>
                    <input type="text" value={desc} onChange={e => setDesc(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
            </div>

            <div className="border border-neutral-300 rounded-2xl overflow-hidden shadow-2xl bg-neutral-950 text-white p-12 aspect-[1200/630] flex flex-col justify-between max-w-2xl mx-auto">
                <div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white tracking-wider uppercase">{tag}</span>
                    <h2 className="text-3xl font-black tracking-tight mt-4 text-white leading-tight">{title}</h2>
                    <p className="text-neutral-400 text-sm mt-2 leading-relaxed">{desc}</p>
                </div>
                <div className="flex justify-between items-center border-t border-neutral-800 pt-4 text-xs text-neutral-500 font-mono">
                    <span>{domain}</span>
                    <span>1200 &times; 630 OG Standard</span>
                </div>
            </div>

            <button onClick={() => window.print()} className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl text-sm">
                Print / Export OG Image
            </button>
        </div>
    );
}
