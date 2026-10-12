import React from 'react';
import Link from 'next/link';
import { SearchBar } from './LayoutComponents';

export default function ToolLayout({ children, title, description }: { children: React.ReactNode, title: string, description: string }) {
    const categories = [
        { name: 'Business & Finance', slug: 'business', count: 25 },
        { name: 'PDF Tools', slug: 'pdf-tools', count: 21 },
        { name: 'Calculators & Finance', slug: 'calculators', count: 20 },
        { name: 'Developer & Code', slug: 'developer', count: 20 },
        { name: 'Text & Writing', slug: 'text-writing', count: 20 },
        { name: 'Design & Media', slug: 'design-media', count: 26 },
        { name: 'Productivity & Utilities', slug: 'productivity', count: 20 },
    ];

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans flex flex-col">
            <nav className="border-b border-neutral-200 bg-white sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between gap-6">
                    <Link href="/" className="text-2xl font-extrabold tracking-tight text-neutral-950 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-lg">H</span>
                        <span>Hydra<span className="text-blue-600">Tools</span></span>
                    </Link>
                    <div className="flex-1 max-w-lg">
                        <SearchBar />
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-sm font-medium text-neutral-600">
                        <Link href="/#popular" className="hover:text-blue-600 transition">Popular</Link>
                        <Link href="/#categories" className="hover:text-blue-600 transition">Categories</Link>
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
                                    <span className="text-xs font-bold bg-neutral-200 text-neutral-700 px-2 py-0.5 rounded-full">152</span>
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
            
            <footer className="border-t border-neutral-200 bg-white py-12 mt-16 text-center text-neutral-500 text-sm">
                <div className="max-w-7xl mx-auto px-6 space-y-3">
                    <div className="flex justify-center items-center gap-6 text-sm font-medium text-neutral-700">
                        <Link href="/" className="hover:text-blue-600">Home</Link>
                        <Link href="/#categories" className="hover:text-blue-600">Categories</Link>
                        <Link href="/tools/word-counter" className="hover:text-blue-600">Word Counter</Link>
                        <Link href="/tools/json-formatter" className="hover:text-blue-600">JSON Formatter</Link>
                        <Link href="/tools/concrete-volume" className="hover:text-blue-600">Concrete Volume</Link>
                    </div>
                    <p className="font-semibold text-neutral-900">100% Client-side. Zero Uploads. Open-source educational utility suite.</p>
                    <p>&copy; {new Date().getFullYear()} HydraTools. Built based on All-Tool &amp; Omni Calculator principles.</p>
                </div>
            </footer>
        </div>
    );
}
