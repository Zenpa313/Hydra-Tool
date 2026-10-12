"use client";
import React, { useState } from "react";
export default function ResumeBuilder() {
    const [name, setName] = useState("Your Name");
    return (
        <div className="space-y-4">
            <input className="w-full p-2 border rounded" value={name} onChange={e => setName(e.target.value)} />
            <div className="p-4 border rounded">Resume for {name} - ...</div>
        </div>
    );
}
