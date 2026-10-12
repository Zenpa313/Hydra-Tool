"use client";
import React, { useState } from "react";

interface Room {
    id: number;
    name: string;
    length: number;
    width: number;
}

export default function SquareFootageCalculator() {
    const [rooms, setRooms] = useState<Room[]>([
        { id: 1, name: "Living Room", length: 20, width: 15 },
        { id: 2, name: "Master Bedroom", length: 16, width: 14 },
        { id: 3, name: "Kitchen", length: 12, width: 10 },
    ]);
    const [pricePerSqFt, setPricePerSqFt] = useState(250);

    const totalSqFt = rooms.reduce((sum, r) => sum + (r.length * r.width), 0);
    const totalSqM = (totalSqFt * 0.092903).toFixed(2);
    const estimatedValue = totalSqFt * pricePerSqFt;

    const addRoom = () => {
        setRooms([...rooms, { id: Date.now(), name: "New Room", length: 10, width: 10 }]);
    };

    const updateRoom = (idx: number, field: keyof Room, val: any) => {
        const copy = [...rooms];
        copy[idx] = { ...copy[idx], [field]: val };
        setRooms(copy);
    };

    const removeRoom = (id: number) => {
        setRooms(rooms.filter(r => r.id !== id));
    };

    return (
        <div className="space-y-6">
            <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <table className="w-full text-left text-sm">
                    <thead className="bg-neutral-50 text-neutral-500 text-xs font-bold uppercase border-b">
                        <tr>
                            <th className="p-3">Room / Space</th>
                            <th className="p-3 text-center w-28">Length (ft)</th>
                            <th className="p-3 text-center w-28">Width (ft)</th>
                            <th className="p-3 text-right w-32">Area (sq ft)</th>
                            <th className="p-3 w-12"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                        {rooms.map((room, idx) => (
                            <tr key={room.id}>
                                <td className="p-2.5">
                                    <input type="text" value={room.name} onChange={e => updateRoom(idx, "name", e.target.value)} className="w-full p-1.5 border rounded" />
                                </td>
                                <td className="p-2.5 text-center">
                                    <input type="number" value={room.length} onChange={e => updateRoom(idx, "length", Number(e.target.value))} className="w-20 p-1.5 border rounded text-center" />
                                </td>
                                <td className="p-2.5 text-center">
                                    <input type="number" value={room.width} onChange={e => updateRoom(idx, "width", Number(e.target.value))} className="w-20 p-1.5 border rounded text-center" />
                                </td>
                                <td className="p-2.5 text-right font-mono font-bold">{(room.length * room.width).toLocaleString()}</td>
                                <td className="p-2.5 text-center">
                                    <button onClick={() => removeRoom(room.id)} className="text-neutral-400 hover:text-red-500">&times;</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center">
                <button onClick={addRoom} className="px-4 py-2 border border-neutral-300 hover:bg-neutral-50 rounded-xl text-xs font-bold">
                    + Add Room / Area
                </button>
                <div className="flex items-center gap-2">
                    <label className="text-xs font-bold uppercase text-neutral-500">Price / Sq Ft ($):</label>
                    <input type="number" value={pricePerSqFt} onChange={e => setPricePerSqFt(Number(e.target.value))} className="w-24 p-2 border rounded-lg text-sm text-center font-bold" />
                </div>
            </div>

            <div className="p-6 bg-neutral-50 border rounded-2xl flex flex-wrap justify-between items-center gap-6">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">Total Floor Area</span>
                    <span className="text-4xl sm:text-5xl font-black text-blue-600 font-mono">{totalSqFt.toLocaleString()} sq ft</span>
                    <span className="text-xs text-neutral-500 block mt-1">({totalSqM} square meters)</span>
                </div>
                <div className="text-right">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">Estimated Property Valuation</span>
                    <span className="text-3xl font-black text-neutral-900 font-mono">${estimatedValue.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
}
