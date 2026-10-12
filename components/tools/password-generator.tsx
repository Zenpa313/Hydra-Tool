"use client";
import React, { useState, useEffect } from "react";

export default function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(16);
    const [options, setOptions] = useState({
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
    });
    const [copied, setCopied] = useState(false);

    const generate = () => {
        const chars = {
            uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            lowercase: "abcdefghijklmnopqrstuvwxyz",
            numbers: "0123456789",
            symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
        };
        let valid = "";
        if (options.uppercase) valid += chars.uppercase;
        if (options.lowercase) valid += chars.lowercase;
        if (options.numbers) valid += chars.numbers;
        if (options.symbols) valid += chars.symbols;

        if (!valid) {
            setPassword("");
            return;
        }

        let res = "";
        const array = new Uint32Array(length);
        window.crypto.getRandomValues(array);
        for (let i = 0; i < length; i++) {
            res += valid[array[i] % valid.length];
        }
        setPassword(res);
    };

    useEffect(() => {
        generate();
    }, [length, options]);

    const copy = () => {
        if (!password) return;
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="max-w-xl mx-auto space-y-6">
            <div className="relative">
                <input
                    type="text"
                    readOnly
                    value={password}
                    className="w-full p-4 pr-24 bg-neutral-50 border border-neutral-300 rounded-2xl font-mono text-lg font-bold text-neutral-900 tracking-wide select-all"
                />
                <button
                    onClick={copy}
                    className="absolute right-2.5 top-2.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-5">
                <div>
                    <div className="flex justify-between items-center text-xs font-bold text-neutral-700 uppercase mb-2">
                        <span>Password Length</span>
                        <span className="font-mono text-blue-600 font-black text-sm">{length}</span>
                    </div>
                    <input
                        type="range"
                        min="8"
                        max="64"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="w-full accent-blue-600"
                    />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                        { id: "uppercase", label: "Uppercase (A-Z)" },
                        { id: "lowercase", label: "Lowercase (a-z)" },
                        { id: "numbers", label: "Numbers (0-9)" },
                        { id: "symbols", label: "Symbols (!@#$)" },
                    ].map((opt) => (
                        <label key={opt.id} className="flex items-center gap-2.5 text-xs font-semibold text-neutral-800 cursor-pointer p-2 bg-white rounded-xl border border-neutral-200">
                            <input
                                type="checkbox"
                                checked={options[opt.id as keyof typeof options]}
                                onChange={(e) => setOptions({ ...options, [opt.id]: e.target.checked })}
                                className="rounded text-blue-600"
                            />
                            <span>{opt.label}</span>
                        </label>
                    ))}
                </div>

                <button
                    onClick={generate}
                    className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition"
                >
                    Generate New Password
                </button>
            </div>
        </div>
    );
}
