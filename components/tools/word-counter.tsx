"use client";
import React, { useState } from "react";

export default function WordCounter() {
    const [text, setText] = useState("");
    const [copied, setCopied] = useState(false);

    // Metrics calculation
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s+/g, "").length;
    const sentences = trimmed ? (text.match(/[^.!?]+[.!?]+(\s|$)/g) || [trimmed]).length : 0;
    const paragraphs = trimmed ? text.split(/\n+/).filter((p) => p.trim().length > 0).length : 0;
    
    // Average reading speed: 200 wpm; speaking speed: 130 wpm
    const readingTimeMinutes = Math.ceil(words / 200);
    const speakingTimeMinutes = Math.ceil(words / 130);

    const handleCopy = () => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleClear = () => {
        setText("");
    };

    const handleCase = (type: "upper" | "lower" | "title") => {
        if (!text) return;
        if (type === "upper") setText(text.toUpperCase());
        if (type === "lower") setText(text.toLowerCase());
        if (type === "title") {
            setText(
                text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase())
            );
        }
    };

    return (
        <div className="space-y-6">
            {/* Top Quick Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 text-center">
                    <span className="text-2xl font-black text-blue-600 block">{words.toLocaleString()}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Words</span>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 text-center">
                    <span className="text-2xl font-black text-neutral-900 block">{chars.toLocaleString()}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Characters</span>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 text-center">
                    <span className="text-2xl font-black text-neutral-900 block">{charsNoSpaces.toLocaleString()}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">No Spaces</span>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 text-center">
                    <span className="text-2xl font-black text-neutral-900 block">{sentences.toLocaleString()}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Sentences</span>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 text-center">
                    <span className="text-2xl font-black text-neutral-900 block">{paragraphs.toLocaleString()}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Paragraphs</span>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 text-center">
                    <span className="text-2xl font-black text-neutral-900 block">{readingTimeMinutes} min</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Read Time</span>
                </div>
            </div>

            {/* Main Textarea */}
            <div className="relative">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type or paste your text here to count words, characters, sentences, and reading time in real-time..."
                    className="w-full h-72 sm:h-80 p-5 bg-white border border-neutral-300 rounded-2xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base leading-relaxed transition"
                />
            </div>

            {/* Quick Action Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => handleCase("upper")}
                        disabled={!text}
                        className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold rounded-lg transition disabled:opacity-40"
                    >
                        UPPERCASE
                    </button>
                    <button
                        onClick={() => handleCase("lower")}
                        disabled={!text}
                        className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold rounded-lg transition disabled:opacity-40"
                    >
                        lowercase
                    </button>
                    <button
                        onClick={() => handleCase("title")}
                        disabled={!text}
                        className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold rounded-lg transition disabled:opacity-40"
                    >
                        Title Case
                    </button>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={handleCopy}
                        disabled={!text}
                        className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-xl transition flex items-center gap-1.5 disabled:opacity-40"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        <span>{copied ? "Copied!" : "Copy Text"}</span>
                    </button>
                    <button
                        onClick={handleClear}
                        disabled={!text}
                        className="px-4 py-2 border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs font-semibold rounded-xl transition disabled:opacity-40"
                    >
                        Clear
                    </button>
                </div>
            </div>

            {/* Estimated Speaking Info */}
            <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-xl flex items-center justify-between text-xs text-blue-900">
                <span>Estimated speech duration: <strong>{speakingTimeMinutes} minute{speakingTimeMinutes === 1 ? "" : "s"}</strong> at 130 words per minute.</span>
                <span className="font-semibold text-blue-700">100% Client-Side</span>
            </div>
        </div>
    );
}
