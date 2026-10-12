"use client";
import React, { useState } from "react";

export default function EmailSignatureGenerator() {
    const [name, setName] = useState("Sarah Jenkins");
    const [title, setTitle] = useState("Senior Product Manager");
    const [company, setCompany] = useState("Nexus Creative Agency");
    const [phone, setPhone] = useState("+1 (555) 987-6543");
    const [email, setEmail] = useState("sarah@nexusagency.com");
    const [website, setWebsite] = useState("www.nexusagency.com");
    const [themeColor, setThemeColor] = useState("#0284c7");
    const [copied, setCopied] = useState(false);

    const htmlSignature = `<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; font-size: 14px; color: #333333; line-height: 1.4;">
  <tr>
    <td style="padding-right: 15px; border-right: 3px solid ${themeColor}; vertical-align: top;">
      <strong style="font-size: 16px; color: #111827;">${name}</strong><br>
      <span style="color: ${themeColor}; font-size: 13px; font-weight: 600;">${title}</span><br>
      <span style="color: #6b7280; font-size: 13px;">${company}</span>
    </td>
    <td style="padding-left: 15px; vertical-align: top;">
      <span style="color: #4b5563;">Phone: ${phone}</span><br>
      <span style="color: #4b5563;">Email: <a href="mailto:${email}" style="color: ${themeColor}; text-decoration: none;">${email}</a></span><br>
      <span style="color: #4b5563;">Web: <a href="https://${website}" style="color: ${themeColor}; text-decoration: none;">${website}</a></span>
    </td>
  </tr>
</table>`;

    const copyHtml = () => {
        navigator.clipboard.writeText(htmlSignature);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Full Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Job Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Company</label>
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Phone</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-xl text-sm" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase mb-1">Brand Accent Color</label>
                    <input type="color" value={themeColor} onChange={(e) => setThemeColor(e.target.value)} className="w-full h-9 rounded-lg cursor-pointer" />
                </div>
            </div>

            <div className="flex flex-col justify-between bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-4">Live Rendered Signature</span>
                    <div className="p-6 bg-white border border-neutral-200 rounded-xl shadow-sm" dangerouslySetInnerHTML={{ __html: htmlSignature }} />
                </div>
                <button onClick={copyHtml} className="w-full py-3 mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition shadow-sm">
                    {copied ? "Copied HTML to Clipboard!" : "Copy HTML Signature"}
                </button>
            </div>
        </div>
    );
}
