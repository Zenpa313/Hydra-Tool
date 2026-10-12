"use client";
import React, { useState } from "react";
export default function LetterheadGenerator() {
    const [company, setCompany] = useState("My Company");
    const [content, setContent] = useState("Dear Client...");
    return (
        <div className="space-y-4">
            <input className="w-full p-2 border rounded" value={company} onChange={e => setCompany(e.target.value)} />
            <textarea className="w-full p-2 border rounded" value={content} onChange={e => setContent(e.target.value)} />
            <div className="p-4 border rounded">
                <h1>{company}</h1>
                <p>{content}</p>
            </div>
        </div>
    );
}
