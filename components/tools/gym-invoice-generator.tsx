"use client";
import React, { useState } from "react";
export default function GymInvoiceGenerator() {
    const [member, setMember] = useState("Alex Johnson");
    const [plan, setPlan] = useState("Monthly Platinum");
    const [amount, setAmount] = useState(99);
    return (
        <div className="space-y-4">
            <input className="w-full p-2 border rounded" value={member} onChange={e => setMember(e.target.value)} />
            <input className="w-full p-2 border rounded" value={plan} onChange={e => setPlan(e.target.value)} />
            <div className="p-4 bg-gray-50 rounded">Invoice for {member} - {plan}: ${amount}</div>
        </div>
    );
}
