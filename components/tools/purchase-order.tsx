"use client";
import React, { useState } from "react";

export default function PurchaseOrder() {
    const [poNumber, setPoNumber] = useState("PO-9021");
    const [vendor, setVendor] = useState("Industrial Supply Co.");
    const [deliveryDate, setDeliveryDate] = useState("2026-11-01");
    const [items, setItems] = useState([
        { desc: "Heavy Duty Shelving Units", qty: 4, price: 250 },
        { desc: "Industrial Packaging Boxes (Pack of 100)", qty: 10, price: 45 },
    ]);

    const total = items.reduce((sum, i) => sum + (i.qty * i.price), 0);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-neutral-50 rounded-2xl border">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">PO Number</label>
                    <input type="text" value={poNumber} onChange={e => setPoNumber(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Vendor / Supplier</label>
                    <input type="text" value={vendor} onChange={e => setVendor(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Expected Delivery Date</label>
                    <input type="date" value={deliveryDate} onChange={e => setDeliveryDate(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
            </div>

            <div className="p-8 bg-white border rounded-2xl shadow-sm space-y-4">
                <div className="flex justify-between border-b pb-4">
                    <div>
                        <h3 className="text-xl font-black">PURCHASE ORDER</h3>
                        <p className="text-xs text-neutral-400">Order ID: {poNumber}</p>
                    </div>
                    <div className="text-right text-xs">
                        <p className="font-bold">Vendor: {vendor}</p>
                        <p className="text-neutral-500">Delivery Target: {deliveryDate}</p>
                    </div>
                </div>

                <div className="divide-y border rounded-xl overflow-hidden">
                    {items.map((item, idx) => (
                        <div key={idx} className="p-3 flex justify-between text-xs">
                            <span>{item.qty}x {item.desc}</span>
                            <span className="font-mono font-bold">${(item.qty * item.price).toFixed(2)}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center pt-2">
                    <span className="text-xs font-bold uppercase text-neutral-400">Total Purchase Order Value</span>
                    <span className="text-2xl font-black font-mono text-blue-600">${total.toFixed(2)}</span>
                </div>
            </div>

            <button onClick={() => window.print()} className="w-full py-3 bg-neutral-900 text-white font-bold rounded-xl text-sm hover:bg-neutral-800 transition">
                Print / Save Purchase Order
            </button>
        </div>
    );
}
