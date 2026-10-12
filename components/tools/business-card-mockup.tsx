"use client";
import React, { useState } from "react";
export default function BusinessCardMockup() {
    const [name, setName] = useState("Name");
    return (
        <div className="space-y-4">
            <input className="w-full p-2 border rounded" value={name} onChange={e => setName(e.target.value)} />
            <div className="w-64 h-36 bg-gray-800 text-white p-4 rounded-lg">{name}</div>
        </div>
    );
}
