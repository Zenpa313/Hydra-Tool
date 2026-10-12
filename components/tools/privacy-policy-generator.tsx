"use client";
import React, { useState } from "react";
export default function PrivacyPolicyGenerator() {
    const [site, setSite] = useState("example.com");
    return (
        <div className="space-y-4">
            <input className="w-full p-2 border rounded" value={site} onChange={e => setSite(e.target.value)} />
            <div className="p-4 bg-gray-50 rounded text-sm text-gray-700">
                Privacy Policy for {site}: We do not collect your data.
            </div>
        </div>
    );
}
