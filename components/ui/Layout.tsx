import React from 'react';
import Link from 'next/link';
import { SearchBar } from './LayoutComponents';

export default function ToolLayout({ children, title, description }: { children: React.ReactNode, title: string, description: string }) {
    const categories = [
        { name: 'Real Estate & Property', slug: 'real-estate', count: 3 },
        { name: 'Construction & Materials', slug: 'construction', count: 7 },
        { name: 'Data & Conversion', slug: 'data', count: 9 },
        { name: 'Developer & Code', slug: 'developer', count: 40 },
        { name: 'Design & Media', slug: 'design-media', count: 30 },
        { name: 'Image', slug: 'image', count: 7 },
        { name: 'Business & Finance', slug: 'business', count: 25 },
        { name: 'PDF Tools', slug: 'pdf-tools', count: 21 },
        { name: 'Calculators & Finance', slug: 'calculators', count: 20 },
        { name: 'Text & Writing', slug: 'text-writing', count: 18 },
        { name: 'Productivity & Utilities', slug: 'productivity', count: 17 },
        { name: 'Time & Date', slug: 'time-date', count: 14 },
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans flex flex-col">
            <nav className="border-b border-neutral-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
                    <Link href="/" className="text-2xl font-black tracking-tight text-neutral-950 flex items-center gap-2.5">
                        <img src="/favicon.svg" alt="AllTools" className="w-8 h-8 rounded-lg shadow-sm" />
                        <span className="font-extrabold text-xl text-neutral-900 tracking-tight">AllTools</span>
                    </Link>
                    <div className="flex-1 max-w-md hidden md:block">
                        <SearchBar />
                    </div>
                    <div className="flex items-center gap-6 text-sm font-semibold text-neutral-600">
                        <Link href="/all-tools" className="hover:text-blue-600 transition">All tools</Link>
                        <Link href="/pdf-tools" className="hover:text-blue-600 transition">PDF tools</Link>
                        <Link href="/about" className="hover:text-blue-600 transition hidden sm:inline">About</Link>
                        <Link href="/contact" className="hover:text-blue-600 transition hidden sm:inline">Contact</Link>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-8 flex-1 w-full flex gap-10">
                <aside className="w-64 shrink-0 hidden lg:block">
                    <div className="sticky top-24 space-y-6">
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 px-3">Browse Categories</h2>
                            <nav className="space-y-1">
                                <Link href="/" className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold bg-neutral-100 text-neutral-900">
                                    <span>All Tools</span>
                                    <span className="text-xs font-bold bg-neutral-200 text-neutral-700 px-2 py-0.5 rounded-full">211</span>
                                </Link>
                                {categories.map(cat => (
                                    <Link key={cat.slug} href={`/#${cat.slug}`} className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition">
                                        <span>{cat.name}</span>
                                        <span className="text-xs text-neutral-400">{cat.count}</span>
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl">
                            <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">100% Client-Side</div>
                            <p className="text-xs text-blue-700 leading-relaxed">
                                Zero server uploads. All calculations, files, and text processing run privately inside your own browser sandbox.
                            </p>
                        </div>
                    </div>
                </aside>
                
                <main className="flex-1 min-w-0">
                    <header className="mb-8 border-b border-neutral-200 pb-6">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
                            <Link href="/" className="hover:underline">Home</Link>
                            <span>/</span>
                            <span>Utility</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 mb-2">{title}</h1>
                        <p className="text-base text-neutral-600 max-w-3xl">{description}</p>
                    </header>
                    <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                        {children}
                    </div>
                </main>
            </div>
            
            <footer className="border-t border-neutral-200/80 bg-white py-12 mt-16 text-center text-neutral-500 text-sm">
                <div className="max-w-7xl mx-auto px-6 space-y-4">
                    <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-semibold text-neutral-600">
                        <Link href="/all-tools" className="hover:text-blue-600">All tools</Link>
                        <Link href="/pdf-tools" className="hover:text-blue-600">PDF tools</Link>
                        <Link href="/about" className="hover:text-blue-600">About</Link>
                        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
                        <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-blue-600">Terms of Service</Link>
                    </div>
                    <div className="pt-2 border-t border-neutral-100 text-xs text-neutral-400 space-y-1">
                        <p className="font-semibold text-neutral-700">100% Client-side. Zero Uploads.</p>
                        <p>Most utilities run directly in your browser without creating an account or sending files to a server.</p>
                        <p className="pt-2">&copy; {new Date().getFullYear()} AllTools. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
