import React from 'react';
import Link from 'next/link';
import { Sidebar, SearchBar } from './LayoutComponents';

export default function ToolLayout({ children, title, description }: { children: React.ReactNode, title: string, description: string }) {
    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans">
            <nav className="border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold tracking-tight text-neutral-950">
                        Hydra<span className="text-blue-600">Tools</span>
                    </Link>
                    <div className="flex-1 max-w-md mx-6">
                        <SearchBar />
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-12 flex gap-12">
                <aside className="w-64 flex-shrink-0">
                    <h2 className="font-bold text-lg mb-4 text-neutral-950">Categories</h2>
                    <nav className="space-y-2">
                        {['Calculators', 'Developer', 'Text & Writing', 'Design & Media', 'Productivity'].map(cat => (
                            <Link key={cat} href={`/categories/${cat.toLowerCase().replace(' & ', '-')}`} className="block text-neutral-600 hover:text-blue-600 py-1">
                                {cat}
                            </Link>
                        ))}
                    </nav>
                </aside>
                <main className="flex-1">
                    <header className="mb-12 border-b border-neutral-100 pb-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 mb-3">{title}</h1>
                        <p className="text-lg text-neutral-600">{description}</p>
                    </header>

                    <div className="bg-white rounded-xl">
                        {children}
                    </div>
                </main>
            </div>
            
            <footer className="border-t py-12 text-center text-neutral-500 text-sm">
                <p className="font-semibold text-neutral-900 mb-2">100% Client-side. Zero Uploads.</p>
                <p>&copy; {new Date().getFullYear()} HydraTools. Privacy-first utilities.</p>
            </footer>
        </div>
    );
}
