"use client";
import { useState } from "react";
export default function Agecalc() {
    
    const [dob, setDob] = useState("");
    const age = new Date().getFullYear() - new Date(dob).getFullYear();
    return (
        <div className="space-y-4">
            <input type="date" className="w-full p-3 border rounded" onChange={e => setDob(e.target.value)} />
            <div className="p-4 bg-gray-100 rounded-lg">Age: {dob ? age : "-"} years</div>
        </div>
    );
}
