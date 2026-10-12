"use client";
import { useState } from "react";
export default function Creditcardpayoff() {
    
    const [balance, setBalance] = useState(5000); const [rate, setRate] = useState(18); const [payment, setPayment] = useState(200);
    const months = Math.ceil(-Math.log(1 - (balance * (rate / 100 / 12)) / payment) / Math.log(1 + rate / 100 / 12));
    return (
        <div className="space-y-4">
            <input type="number" placeholder="Balance ($)" className="w-full p-3 border rounded" onChange={e => setBalance(Number(e.target.value))} />
            <input type="number" placeholder="APR Rate (%)" className="w-full p-3 border rounded" onChange={e => setRate(Number(e.target.value))} />
            <input type="number" placeholder="Monthly Payment ($)" className="w-full p-3 border rounded" onChange={e => setPayment(Number(e.target.value))} />
            <div className="p-4 bg-gray-100 rounded-lg">Months to Payoff: {months > 0 ? months : "Increase payment"}</div>
        </div>
    );
}
