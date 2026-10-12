"use client";
import React, { useState } from "react";

export default function ContractTemplate() {
    const [clientName, setClientName] = useState("Acme Corporation");
    const [contractorName, setContractorName] = useState("Your Agency LLC");
    const [serviceDesc, setServiceDesc] = useState("Full-stack web application development and maintenance");
    const [fee, setFee] = useState(5000);
    const [deadline, setDeadline] = useState("30 days from signing");

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-neutral-50 rounded-2xl border">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Contractor / Service Provider</label>
                    <input type="text" value={contractorName} onChange={(e) => setContractorName(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Client Name</label>
                    <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Total Fee ($)</label>
                    <input type="number" value={fee} onChange={(e) => setFee(Number(e.target.value))} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Timeline / Completion</label>
                    <input type="text" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Scope of Services</label>
                    <textarea rows={2} value={serviceDesc} onChange={(e) => setServiceDesc(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
            </div>

            <div className="p-8 bg-white border rounded-2xl shadow-sm text-sm space-y-4 text-neutral-800 leading-relaxed">
                <h3 className="text-xl font-bold text-center border-b pb-4">INDEPENDENT CONTRACTOR SERVICE AGREEMENT</h3>
                <p>
                    This Agreement is entered into on <strong>{new Date().toLocaleDateString()}</strong> between <strong>{contractorName}</strong> (&quot;Contractor&quot;) and <strong>{clientName}</strong> (&quot;Client&quot;).
                </p>
                <h4 className="font-bold text-neutral-900 mt-4">1. Scope of Work</h4>
                <p>{serviceDesc}</p>
                <h4 className="font-bold text-neutral-900 mt-4">2. Compensation and Payment</h4>
                <p>Client agrees to pay Contractor a total fee of <strong>${fee.toLocaleString()}</strong> upon milestone deliveries.</p>
                <h4 className="font-bold text-neutral-900 mt-4">3. Term and Termination</h4>
                <p>Services shall be completed within <strong>{deadline}</strong> unless extended by mutual written agreement.</p>
                <div className="pt-8 border-t grid grid-cols-2 gap-8 text-xs font-bold">
                    <div>Contractor Signature: _______________________</div>
                    <div>Client Signature: _______________________</div>
                </div>
            </div>

            <button onClick={() => window.print()} className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition">
                Print / Download Agreement
            </button>
        </div>
    );
}
