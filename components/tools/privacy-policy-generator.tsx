"use client";
import React, { useState } from "react";

export default function PrivacyPolicyGenerator() {
    const [appName, setAppName] = useState("MyApp");
    const [company, setCompany] = useState("Tech Solutions LLC");
    const [email, setEmail] = useState("support@myapp.com");
    const [copied, setCopied] = useState(false);

    const text = `# Privacy Policy for ${appName}
Last updated: ${new Date().toLocaleDateString()}

${company} operates ${appName}. This page informs you of our policies regarding the collection, use, and disclosure of Personal Information.

## Information Collection And Use
We do not sell your personal data. We only use information to provide and improve the Service.

## Security
The security of your Personal Information is important to us, but remember that no method of transmission over the Internet is 100% secure.

## Contact Us
If you have questions, please contact us at ${email}.`;

    const copy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-neutral-50 rounded-xl border">
                <input type="text" value={appName} onChange={e => setAppName(e.target.value)} placeholder="App Name" className="p-2 border rounded-lg text-sm" />
                <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" className="p-2 border rounded-lg text-sm" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="p-2 border rounded-lg text-sm" />
            </div>
            <pre className="p-4 bg-neutral-50 rounded-xl text-xs font-mono whitespace-pre-wrap border max-h-80 overflow-y-auto">{text}</pre>
            <button onClick={copy} className="w-full py-2.5 bg-neutral-900 text-white text-xs font-bold rounded-xl">
                {copied ? "Copied!" : "Copy Privacy Policy"}
            </button>
        </div>
    );
}
