"use client";
import React, { useState } from "react";
export default function PurchaseOrder() {
    const [vendor, setVendor] = useState("Supplier X");
    const [item, setItem] = useState("Widget");
    return (
        <div className="space-y-4">
            <input className="w-full p-2 border rounded" value={vendor} onChange={e => setVendor(e.target.value)} />
            <div className="p-4 border rounded">PO for {item} from {vendor}</div>
        </div>
    );
}
