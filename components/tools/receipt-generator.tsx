"use client";
import React, { useState } from "react";

export default function ReceiptGenerator() {
    const [receiptId, setReceiptId] = useState("REC-8492");
    const [businessName, setBusinessName] = useState("Zenith Studio & Coffee");
    const [customerName, setCustomerName] = useState("Emily Davis");
    const [paymentMethod, setPaymentMethod] = useState("Credit Card (Visa)");
    const [items, setItems] = useState([
        { name: "Consultation Session", cost: 120 },
        { name: "Digital Asset Pack", cost: 45 },
    ]);

    const total = items.reduce((sum, i) => sum + i.cost, 0);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Business Name</label>
                    <input type="text" value={businessName} onChange={e => setBusinessName(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Customer Name</label>
                    <input type="text" value={customerName} onChange={e => setCustomerName(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Payment Method</label>
                    <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)} className="w-full p-2 border rounded-xl text-sm">
                        <option>Credit Card (Visa/Mastercard)</option>
                        <option>Cash</option>
                        <option>Bank Wire Transfer</option>
                        <option>PayPal / Stripe</option>
                    </select>
                </div>
                <button onClick={() => window.print()} className="w-full py-3 bg-neutral-900 text-white font-bold rounded-xl text-sm hover:bg-neutral-800 transition">
                    Print Official Receipt
                </button>
            </div>

            <div className="p-8 bg-neutral-50 border rounded-2xl flex flex-col justify-between font-mono text-xs text-neutral-800 shadow-inner">
                <div className="space-y-3">
                    <div className="text-center border-b pb-3">
                        <h4 className="text-base font-black uppercase text-neutral-900">{businessName}</h4>
                        <p className="text-[11px] text-neutral-400">Official Sales Receipt #{receiptId}</p>
                        <p className="text-[10px] text-neutral-400">{new Date().toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between py-1"><span>Billed To:</span><span>{customerName}</span></div>
                    <div className="flex justify-between py-1"><span>Paid Via:</span><span>{paymentMethod}</span></div>
                    <div className="border-t border-b py-2 space-y-1">
                        {items.map((item, idx) => (
                            <div key={idx} className="flex justify-between">
                                <span>{item.name}</span>
                                <span>${item.cost.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-base font-black pt-2">
                        <span>TOTAL PAID</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
                <p className="text-center text-[10px] text-neutral-400 pt-6">Thank you for your business!</p>
            </div>
        </div>
    );
}
