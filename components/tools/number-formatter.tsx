"use client";
import React, { useState, useEffect } from "react";

export default function NumberFormatter() {
    const [num, setNum] = useState("1234567.89");
    const [locale, setLocale] = useState("en-US");
    const [currency, setCurrency] = useState("USD");
    const [formatted, setFormatted] = useState("");

    useEffect(() => {
        const val = parseFloat(num);
        if (isNaN(val)) {
            setFormatted("Invalid Number");
            return;
        }
        try {
            setFormatted(new Intl.NumberFormat(locale, { style: "currency", currency }).format(val));
        } catch {
            setFormatted(new Intl.NumberFormat(locale).format(val));
        }
    }, [num, locale, currency]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Raw Number</label>
                    <input type="number" value={num} onChange={e => setNum(e.target.value)} className="w-full p-3 border rounded-xl text-sm font-mono" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Locale</label>
                        <select value={locale} onChange={e => setLocale(e.target.value)} className="w-full p-2.5 border rounded-xl text-sm">
                            <option value="en-US">en-US (United States)</option>
                            <option value="de-DE">de-DE (Germany / EU)</option>
                            <option value="en-GB">en-GB (United Kingdom)</option>
                            <option value="ja-JP">ja-JP (Japan)</option>
                            <option value="fr-FR">fr-FR (France)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Currency Code</label>
                        <input type="text" value={currency} onChange={e => setCurrency(e.target.value.toUpperCase())} className="w-full p-2.5 border rounded-xl text-sm uppercase font-mono font-bold" />
                    </div>
                </div>
            </div>

            <div className="p-8 bg-neutral-50 border rounded-2xl flex flex-col justify-center items-center text-center">
                <span className="text-xs font-bold uppercase text-neutral-400 block mb-2">Formatted Output</span>
                <span className="text-4xl sm:text-5xl font-black font-mono text-blue-600">{formatted}</span>
            </div>
        </div>
    );
}
