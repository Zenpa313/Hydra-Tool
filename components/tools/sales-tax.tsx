"use client";
import { useState } from "react";
export default function SalesTax() {
    const [amount, setAmount] = useState(0); const [taxRate, setTaxRate] = useState(0);
    const taxAmount = (amount * taxRate) / 100;
    return (
        <div className="space-y-4">
            <input type="number" placeholder="Amount" className="w-full p-3 border rounded-xl" onChange={e => setAmount(Number(e.target.value))} />
            <input type="number" placeholder="Tax Rate (%)" className="w-full p-3 border rounded-xl" onChange={e => setTaxRate(Number(e.target.value))} />
            <div className="text-xl font-bold p-4 bg-gray-100 rounded-lg">Tax: ${taxAmount.toFixed(2)} | Total: ${(amount + taxAmount).toFixed(2)}</div>
        </div>
    );
}