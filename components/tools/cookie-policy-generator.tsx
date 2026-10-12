"use client";
import React, { useState } from "react";

export default function CookiePolicyGenerator() {
    const [siteName, setSiteName] = useState("MyWebsite.com");
    const [companyName, setCompanyName] = useState("Acme Inc.");
    const [email, setEmail] = useState("privacy@mywebsite.com");
    const [copied, setCopied] = useState(false);

    const policyText = `# Cookie Policy for ${siteName}

Last updated: ${new Date().toLocaleDateString()}

This Cookie Policy explains how ${companyName} ("we", "us", and "our") uses cookies and similar tracking technologies when you visit our website at ${siteName}.

## 1. What Are Cookies?
Cookies are small data files placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work efficiently and provide reporting metrics.

## 2. Why Do We Use Cookies?
We use cookies for several reasons:
- **Essential Cookies:** Strictly necessary to provide core website functionality, secure logins, and preferences.
- **Analytics & Performance Cookies:** Help us understand user traffic patterns and optimize page speeds.
- **Functionality Cookies:** Remember your settings such as theme preferences and language.

## 3. How Can You Control Cookies?
You have the right to decide whether to accept or reject cookies through your web browser controls. If you choose to reject cookies, you may still use our website, though access to some functionality may be restricted.

## 4. Contact Us
If you have questions about our use of cookies, contact us at ${email}.
`;

    const copy = () => {
        navigator.clipboard.writeText(policyText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-neutral-50 rounded-2xl border">
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Website Domain / Name</label>
                    <input type="text" value={siteName} onChange={(e) => setSiteName(e.target.value)} className="w-full p-2.5 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Company / Entity</label>
                    <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full p-2.5 border rounded-xl text-sm" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Privacy Contact Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2.5 border rounded-xl text-sm" />
                </div>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Policy Preview (Markdown)</span>
                    <button onClick={copy} className="px-4 py-2 bg-neutral-900 text-white rounded-xl text-xs font-bold hover:bg-neutral-800 transition">
                        {copied ? "Copied!" : "Copy Policy"}
                    </button>
                </div>
                <pre className="p-4 bg-neutral-50 rounded-xl text-xs font-mono text-neutral-800 whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto border">
                    {policyText}
                </pre>
            </div>
        </div>
    );
}
