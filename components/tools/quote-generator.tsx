"use client";
import React, { useState } from "react";

export default function QuoteGenerator() {
    const [quoteNo, setQuoteNo] = useState("QT-2026-01");
    const [client, setClient] = useState("Acme Corporation");
    const [expiryDays, setExpiryDays] = useState(30);
    const [items, setItems] = useState([
        { description: "Mobile App Frontend Design", amount: 2400 },
        { description: "Backend API Integration & Auth", amount: 1800 },
    ]);
    const [discount, setDiscount] = useState(5);

    const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
    const discountAmount = (subtotal * discount) / 100;
    const total = subtotal - discountAmount;

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-neutral-50 rounded-2xl border">
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Quote #</label>
                    <input type="text" value={quoteNo} onChange={e => setQuoteNo(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Prospective Client</label>
                    <input type="text" value={client} onChange={e => setClient(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Valid For (Days)</label>
                    <input type="number" value={expiryDays} onChange={e => setExpiryDays(Number(e.target.value))} className="w-full p-2 border rounded-xl text-sm" />
                </div>
            </div>

            <div className="p-8 bg-white border rounded-2xl shadow-sm space-y-6">
                <div className="flex justify-between items-start border-b pb-4">
                    <div>
                        <h3 className="text-2xl font-black text-neutral-900">FORMAL PRICE QUOTE</h3>
                        <p className="text-xs text-neutral-400 mt-1">Quote Reference: {quoteNo}</p>
                    </div>
                    <div className="text-right text-xs text-neutral-500">
                        <p>Issued: {new Date().toLocaleDateString()}</p>
                        <p className="font-semibold text-neutral-800">Expires in {expiryDays} days</p>
                    </div>
                </div>

                <div className="divide-y divide-neutral-200 border rounded-xl overflow-hidden">
                    {items.map((item, idx) => (
                        <div key={idx} className="p-3.5 flex justify-between items-center hover:bg-neutral-50">
                            <span className="text-sm font-medium text-neutral-800">{item.description}</span>
                            <span className="font-mono font-bold text-sm text-neutral-900">${item.amount.toFixed(2)}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-end border-t pt-4">
                    <div className="flex items-center gap-2">
                        <label className="text-xs font-bold text-neutral-500">Discount (%):</label>
                        <input type="number" value={discount} onChange={e => setDiscount(Number(e.target.value))} className="w-16 p-1.5 border rounded text-xs text-center font-bold" />
                    </div>
                    <div className="text-right space-y-1">
                        <p className="text-xs text-neutral-500">Subtotal: <span className="font-mono font-bold">${subtotal.toFixed(2)}</span></p>
                        <p className="text-xs text-green-600 font-bold">Discount: -${discountAmount.toFixed(2)}</p>
                        <p className="text-2xl font-black text-neutral-900 font-mono pt-2 border-t">${total.toFixed(2)}</p>
                    </div>
                </div>
            </div>

            <button onClick={() => window.print()} className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition">
                Print / Download Quote PDF
            </button>
        </div>
    );
}
