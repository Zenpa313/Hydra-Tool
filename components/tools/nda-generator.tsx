"use client";
import React, { useState } from "react";

export default function NdaGenerator() {
    const [disclosingParty, setDisclosingParty] = useState("Disclosing Entity LLC");
    const [receivingParty, setReceivingParty] = useState("Receiving Party Inc.");
    const [purpose, setPurpose] = useState("Evaluating a potential joint business partnership and investment opportunity");
    const [termYears, setTermYears] = useState(2);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-neutral-50 rounded-2xl border">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Disclosing Party</label>
                    <input type="text" value={disclosingParty} onChange={(e) => setDisclosingParty(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Receiving Party</label>
                    <input type="text" value={receivingParty} onChange={(e) => setReceivingParty(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Non-Disclosure Period (Years)</label>
                    <input type="number" value={termYears} onChange={(e) => setTermYears(Number(e.target.value))} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Purpose of Discussion</label>
                    <input type="text" value={purpose} onChange={(e) => setPurpose(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
            </div>

            <div className="p-8 bg-white border rounded-2xl shadow-sm text-sm space-y-4 text-neutral-800 leading-relaxed">
                <h3 className="text-xl font-bold text-center border-b pb-4">MUTUAL NON-DISCLOSURE AGREEMENT</h3>
                <p>
                    This Non-Disclosure Agreement is executed on <strong>{new Date().toLocaleDateString()}</strong> by and between <strong>{disclosingParty}</strong> and <strong>{receivingParty}</strong>.
                </p>
                <h4 className="font-bold text-neutral-900 mt-4">1. Confidential Information</h4>
                <p>Confidential information includes proprietary technical, financial, and business data disclosed for the purpose of {purpose}.</p>
                <h4 className="font-bold text-neutral-900 mt-4">2. Duty of Confidentiality</h4>
                <p>The Receiving Party agrees to safeguard said proprietary data for a duration of <strong>{termYears} years</strong> following disclosure.</p>
                <div className="pt-8 border-t grid grid-cols-2 gap-8 text-xs font-bold">
                    <div>Disclosing Party: _______________________</div>
                    <div>Receiving Party: _______________________</div>
                </div>
            </div>

            <button onClick={() => window.print()} className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition">
                Print / Download NDA
            </button>
        </div>
    );
}
