"use client";
import React, { useState } from "react";

export default function TermsOfServiceGenerator() {
    const [site, setSite] = useState("MyPlatform.com");
    const [company, setCompany] = useState("Global Digital Corp");
    const [copied, setCopied] = useState(false);

    const terms = `# Terms of Service for ${site}
Effective Date: ${new Date().toLocaleDateString()}

1. Terms: By accessing this website, you agree to be bound by these Terms of Service.
2. Use License: Permission is granted to temporarily download the materials for personal, non-commercial viewing only.
3. Disclaimer: The materials on ${company}'s website are provided on an 'as is' basis.
4. Governing Law: These terms and conditions are governed by and construed in accordance with the laws.`;

    const copy = () => {
        navigator.clipboard.writeText(terms);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 p-4 bg-neutral-50 rounded-xl border">
                <input type="text" value={site} onChange={e => setSite(e.target.value)} className="p-2 border rounded-lg text-sm" />
                <input type="text" value={company} onChange={e => setCompany(e.target.value)} className="p-2 border rounded-lg text-sm" />
            </div>
            <pre className="p-4 bg-neutral-50 rounded-xl text-xs font-mono whitespace-pre-wrap border max-h-80 overflow-y-auto">{terms}</pre>
            <button onClick={copy} className="w-full py-2.5 bg-neutral-900 text-white text-xs font-bold rounded-xl">
                {copied ? "Copied!" : "Copy Terms of Service"}
            </button>
        </div>
    );
}
