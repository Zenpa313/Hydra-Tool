"use client";
import React, { useState } from "react";

export default function BusinessCardMaker() {
    const [name, setName] = useState("Alex Morgan");
    const [title, setTitle] = useState("Chief Technology Officer");
    const [company, setCompany] = useState("Nexus Dynamics Inc.");
    const [email, setEmail] = useState("alex@nexusdynamics.io");
    const [phone, setPhone] = useState("+1 (555) 234-5678");
    const [website, setWebsite] = useState("www.nexusdynamics.io");
    const [bgColor, setBgColor] = useState("#0f172a");
    const [textColor, setTextColor] = useState("#ffffff");
    const [accentColor, setAccentColor] = useState("#3b82f6");

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Full Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Job Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Company</label>
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Phone</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Website</label>
                    <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Background</label>
                        <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-full h-9 rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Text</label>
                        <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-full h-9 rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Accent</label>
                        <input type="color" value={accentColor} onChange={(e) => setAccentColor(e.target.value)} className="w-full h-9 rounded-lg" />
                    </div>
                </div>

                <button
                    onClick={() => window.print()}
                    className="w-full py-3 bg-neutral-900 text-white rounded-xl font-bold text-sm hover:bg-neutral-800 transition"
                >
                    Print / Export Card
                </button>
            </div>

            <div className="flex items-center justify-center p-6 bg-neutral-100 rounded-2xl border">
                <div
                    style={{ backgroundColor: bgColor, color: textColor }}
                    className="w-96 h-56 rounded-2xl p-6 shadow-2xl flex flex-col justify-between border border-black/10 transition"
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-extrabold text-xl tracking-tight">{name}</h3>
                            <p style={{ color: accentColor }} className="text-xs font-semibold uppercase tracking-wider">{title}</p>
                        </div>
                        <span style={{ color: accentColor }} className="font-black text-lg">■</span>
                    </div>

                    <div className="space-y-1 text-xs opacity-90 border-t border-white/10 pt-3">
                        <p className="font-bold">{company}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{website}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
