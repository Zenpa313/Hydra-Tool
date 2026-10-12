"use client";
import React, { useState } from "react";
export default function TermsOfServiceGenerator() {
    const [site, setSite] = useState("example.com");
    return (
        <div className="space-y-4">
            <input className="w-full p-2 border rounded" value={site} onChange={e => setSite(e.target.value)} />
            <div className="p-4 bg-gray-50 rounded">Terms for {site}: Use at own risk.</div>
        </div>
    );
}
