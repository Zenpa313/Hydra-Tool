"use client";
import React, { useState } from "react";

export default function ProjectCostEstimator() {
    const [items, setItems] = useState([
        { id: 1, name: "UI/UX Design & Wireframing", hours: 40, rate: 75 },
        { id: 2, name: "Frontend Development", hours: 80, rate: 85 },
        { id: 3, name: "Cloud Infrastructure & Testing", hours: 20, rate: 90 },
    ]);
    const [contingency, setContingency] = useState(15);

    const subtotal = items.reduce((sum, item) => sum + (item.hours * item.rate), 0);
    const contingencyAmount = (subtotal * contingency) / 100;
    const totalEstimate = subtotal + contingencyAmount;

    const addItem = () => {
        setItems([...items, { id: Date.now(), name: "Additional Task", hours: 10, rate: 70 }]);
    };

    const updateItem = (idx: number, field: string, val: any) => {
        const copy = [...items];
        copy[idx] = { ...copy[idx], [field]: val };
        setItems(copy);
    };

    const removeItem = (idx: number) => {
        setItems(items.filter((_, i) => i !== idx));
    };

    return (
        <div className="space-y-6">
            <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <table className="w-full text-left text-sm">
                    <thead className="bg-neutral-50 text-neutral-500 text-xs font-bold uppercase border-b">
                        <tr>
                            <th className="p-3">Deliverable / Category</th>
                            <th className="p-3 text-center w-28">Hours</th>
                            <th className="p-3 text-center w-28">Rate ($)</th>
                            <th className="p-3 text-right w-32">Total</th>
                            <th className="p-3 w-12"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                        {items.map((item, idx) => (
                            <tr key={item.id}>
                                <td className="p-2.5">
                                    <input type="text" value={item.name} onChange={e => updateItem(idx, "name", e.target.value)} className="w-full p-1.5 border rounded" />
                                </td>
                                <td className="p-2.5 text-center">
                                    <input type="number" value={item.hours} onChange={e => updateItem(idx, "hours", Number(e.target.value))} className="w-20 p-1.5 border rounded text-center" />
                                </td>
                                <td className="p-2.5 text-center">
                                    <input type="number" value={item.rate} onChange={e => updateItem(idx, "rate", Number(e.target.value))} className="w-20 p-1.5 border rounded text-center" />
                                </td>
                                <td className="p-2.5 text-right font-mono font-bold">${(item.hours * item.rate).toFixed(2)}</td>
                                <td className="p-2.5 text-center">
                                    <button onClick={() => removeItem(idx)} className="text-neutral-400 hover:text-red-500">&times;</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
                <button onClick={addItem} className="px-4 py-2 border border-neutral-300 hover:bg-neutral-50 rounded-xl text-xs font-bold">
                    + Add Task / Item
                </button>
                <div className="flex items-center gap-3">
                    <label className="text-xs font-bold uppercase text-neutral-500">Contingency Buffer (%):</label>
                    <input type="number" value={contingency} onChange={e => setContingency(Number(e.target.value))} className="w-20 p-2 border rounded-lg text-sm text-center font-bold" />
                </div>
            </div>

            <div className="p-6 bg-neutral-50 border rounded-2xl flex justify-between items-center">
                <div className="space-y-1 text-xs text-neutral-600">
                    <div>Base Subtotal: <strong className="font-mono">${subtotal.toFixed(2)}</strong></div>
                    <div>Risk Contingency ({contingency}%): <strong className="font-mono">${contingencyAmount.toFixed(2)}</strong></div>
                </div>
                <div className="text-right">
                    <span className="text-xs font-bold uppercase text-neutral-400 block">Total Projected Budget</span>
                    <span className="text-4xl font-black text-blue-600 font-mono">${totalEstimate.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}
