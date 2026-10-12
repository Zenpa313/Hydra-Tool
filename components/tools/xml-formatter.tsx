"use client";
import React, { useState } from "react";

export default function XmlFormatter() {
    const [xml, setXml] = useState('<root><user id="1"><name>John Doe</name><role>Admin</role></user></root>');
    const [formatted, setFormatted] = useState("");
    const [copied, setCopied] = useState(false);

    const formatXml = (input: string) => {
        try {
            let formatted = '';
            let reg = /(>)(<)(\/*)/g;
            let w = input.replace(reg, '$1\r\n$2$3');
            let pad = 0;
            w.split('\r\n').forEach((node) => {
                let indent = 0;
                if (node.match(/.+<\/\w[^>]*>$/)) {
                    indent = 0;
                } else if (node.match(/^<\/\w/)) {
                    if (pad !== 0) pad -= 1;
                } else if (node.match(/^<\w[^>]*[^\/]>/)) {
                    indent = 1;
                } else {
                    indent = 0;
                }
                let padding = '';
                for (let i = 0; i < pad; i++) padding += '  ';
                formatted += padding + node + '\r\n';
                pad += indent;
            });
            setFormatted(formatted.trim());
        } catch {
            setFormatted("Invalid XML string");
        }
    };

    return (
        <div className="space-y-4">
            <textarea value={xml} onChange={e => setXml(e.target.value)} placeholder="Paste XML code here..." className="w-full h-40 p-4 border rounded-2xl font-mono text-sm" />
            <button onClick={() => formatXml(xml)} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs">Format XML</button>
            {formatted && (
                <div className="p-4 bg-neutral-900 text-neutral-100 rounded-2xl font-mono text-xs whitespace-pre overflow-x-auto relative">
                    <button onClick={() => { navigator.clipboard.writeText(formatted); setCopied(true); setTimeout(() => setCopied(false), 1500); }} className="absolute top-3 right-3 px-3 py-1 bg-neutral-700 text-white rounded text-xs">
                        {copied ? "Copied!" : "Copy"}
                    </button>
                    {formatted}
                </div>
            )}
        </div>
    );
}
