import React from 'react';
import Link from 'next/link';

export default function ToolLayout({ children, title, description }: { children: React.ReactNode, title: string, description: string }) {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
            <nav className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        HydraTools
                    </Link>
                    <div className="text-sm text-neutral-400">Professional Utility Suite</div>
                </div>
            </nav>
            <main className="max-w-5xl mx-auto px-6 py-12">
                <header className="mb-12 text-center">
                    <h1 className="text-5xl font-extrabold mb-4 tracking-tight">{title}</h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">{description}</p>
                </header>
                <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-2xl">
                    {children}
                </div>
            </main>
            <footer className="border-t border-neutral-800 mt-20 py-8 text-center text-neutral-500 text-sm">
                &copy; {new Date().getFullYear()} HydraTools. Built for efficiency.
            </footer>
        </div>
    );
}
