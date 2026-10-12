"use client";
import React, { useState } from "react";

interface Item {
    description: string;
    quantity: number;
    rate: number;
}

export default function InvoiceGenerator() {
    const [invoiceNo, setInvoiceNo] = useState("INV-1001");
    const [sender, setSender] = useState("Your Company Name\ncontact@yourcompany.com\n123 Business St");
    const [client, setClient] = useState("Client Company\nclient@example.com\n456 Client Ave");
    const [items, setItems] = useState<Item[]>([
        { description: "Website Development & UI Design", quantity: 1, rate: 1200 },
        { description: "SEO Optimization & Setup", quantity: 1, rate: 350 },
    ]);
    const [taxPercent, setTaxPercent] = useState(10);
    const [currency, setCurrency] = useState("$");

    const addItem = () => {
        setItems([...items, { description: "New Item / Service", quantity: 1, rate: 100 }]);
    };

    const removeItem = (idx: number) => {
        setItems(items.filter((_, i) => i !== idx));
    };

    const updateItem = (idx: number, field: keyof Item, value: any) => {
        const copy = [...items];
        copy[idx] = { ...copy[idx], [field]: value };
        setItems(copy);
    };

    const subtotal = items.reduce((sum, item) => sum + item.quantity * item.rate, 0);
    const taxAmount = (subtotal * taxPercent) / 100;
    const total = subtotal + taxAmount;

    const printInvoice = () => {
        window.print();
    };

    return (
        <div className="space-y-8">
            {/* Editor Bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-neutral-50 border border-neutral-200 rounded-2xl">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                        Your Business Details (From)
                    </label>
                    <textarea
                        rows={3}
                        value={sender}
                        onChange={(e) => setSender(e.target.value)}
                        className="w-full p-2.5 bg-white border border-neutral-300 rounded-xl text-sm"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                        Client Details (To)
                    </label>
                    <textarea
                        rows={3}
                        value={client}
                        onChange={(e) => setClient(e.target.value)}
                        className="w-full p-2.5 bg-white border border-neutral-300 rounded-xl text-sm"
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                            Invoice #
                        </label>
                        <input
                            type="text"
                            value={invoiceNo}
                            onChange={(e) => setInvoiceNo(e.target.value)}
                            className="w-full p-2.5 bg-white border border-neutral-300 rounded-xl text-sm"
                        />
                    </div>
                    <div className="w-24">
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                            Currency
                        </label>
                        <input
                            type="text"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="w-full p-2.5 bg-white border border-neutral-300 rounded-xl text-sm text-center font-bold"
                        />
                    </div>
                    <div className="w-28">
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                            Tax Rate (%)
                        </label>
                        <input
                            type="number"
                            value={taxPercent}
                            onChange={(e) => setTaxPercent(Number(e.target.value))}
                            className="w-full p-2.5 bg-white border border-neutral-300 rounded-xl text-sm text-center"
                        />
                    </div>
                </div>
                <div className="flex items-end">
                    <button
                        onClick={printInvoice}
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition shadow-sm flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                        <span>Print / Download PDF</span>
                    </button>
                </div>
            </div>

            {/* Live Invoice Canvas */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-8 sm:p-10 shadow-sm space-y-8">
                <div className="flex justify-between items-start border-b border-neutral-200 pb-6">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">INVOICE</h2>
                        <p className="text-sm font-semibold text-neutral-500 mt-1">Invoice Number: {invoiceNo}</p>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">Date</span>
                        <span className="text-sm font-semibold text-neutral-800">{new Date().toLocaleDateString()}</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">From:</h4>
                        <p className="whitespace-pre-line text-neutral-700 font-medium">{sender}</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Billed To:</h4>
                        <p className="whitespace-pre-line text-neutral-700 font-medium">{client}</p>
                    </div>
                </div>

                {/* Items Table */}
                <div className="border border-neutral-200 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-neutral-50 text-neutral-500 text-xs font-bold uppercase border-b border-neutral-200">
                            <tr>
                                <th className="p-3.5">Description</th>
                                <th className="p-3.5 w-24 text-center">Qty</th>
                                <th className="p-3.5 w-32 text-right">Rate</th>
                                <th className="p-3.5 w-32 text-right">Amount</th>
                                <th className="p-3.5 w-12"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                            {items.map((item, idx) => (
                                <tr key={idx} className="hover:bg-neutral-50/50">
                                    <td className="p-3">
                                        <input
                                            type="text"
                                            value={item.description}
                                            onChange={(e) => updateItem(idx, "description", e.target.value)}
                                            className="w-full p-1.5 border border-transparent hover:border-neutral-200 rounded"
                                        />
                                    </td>
                                    <td className="p-3 text-center">
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => updateItem(idx, "quantity", Number(e.target.value))}
                                            className="w-16 p-1.5 border border-transparent hover:border-neutral-200 rounded text-center"
                                        />
                                    </td>
                                    <td className="p-3 text-right">
                                        <input
                                            type="number"
                                            value={item.rate}
                                            onChange={(e) => updateItem(idx, "rate", Number(e.target.value))}
                                            className="w-24 p-1.5 border border-transparent hover:border-neutral-200 rounded text-right"
                                        />
                                    </td>
                                    <td className="p-3 text-right font-bold font-mono">
                                        {currency}{(item.quantity * item.rate).toFixed(2)}
                                    </td>
                                    <td className="p-3 text-center">
                                        <button
                                            onClick={() => removeItem(idx)}
                                            className="text-neutral-400 hover:text-red-600 font-bold"
                                        >
                                            &times;
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between items-start">
                    <button
                        onClick={addItem}
                        className="px-4 py-2 border border-neutral-300 hover:bg-neutral-50 text-neutral-700 text-xs font-bold rounded-xl transition"
                    >
                        + Add Line Item
                    </button>
                    <div className="w-64 space-y-2 text-sm text-right">
                        <div className="flex justify-between text-neutral-600">
                            <span>Subtotal:</span>
                            <span className="font-mono font-semibold">{currency}{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-neutral-600">
                            <span>Tax ({taxPercent}%):</span>
                            <span className="font-mono font-semibold">{currency}{taxAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-base font-extrabold text-neutral-900 border-t border-neutral-200 pt-2">
                            <span>Total Due:</span>
                            <span className="font-mono text-blue-600">{currency}{total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
