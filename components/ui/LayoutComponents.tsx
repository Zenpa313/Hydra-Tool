"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import manifest from '../../manifest.json';

export const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const filtered = search.trim() === "" ? [] : manifest.tools.filter((t: any) => 
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase()) ||
        (t.keywords && t.keywords.some((k: string) => k.toLowerCase().includes(search.toLowerCase())))
    ).slice(0, 8);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className="relative w-full">
            <div className="relative">
                <input 
                    type="text" 
                    value={search}
                    onFocus={() => setIsOpen(true)}
                    placeholder="Search 100+ tools (e.g. calculator, pdf, json, font)..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setIsOpen(true);
                    }}
                />
                <svg className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>

            {isOpen && filtered.length > 0 && (
                <div className="absolute left-0 right-0 top-12 mt-1 bg-white border border-neutral-200 rounded-xl shadow-xl z-50 overflow-hidden divide-y divide-neutral-100 max-h-96 overflow-y-auto">
                    {filtered.map((tool: any) => (
                        <Link 
                            key={tool.id} 
                            href={`/tools/${tool.id}`}
                            onClick={() => {
                                setIsOpen(false);
                                setSearch("");
                            }}
                            className="flex items-center justify-between p-3.5 hover:bg-neutral-50 transition"
                        >
                            <div>
                                <div className="text-sm font-semibold text-neutral-900">{tool.name}</div>
                                <div className="text-xs text-neutral-500 line-clamp-1">{tool.description}</div>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full ml-3 shrink-0">
                                {tool.category}
                            </span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};
