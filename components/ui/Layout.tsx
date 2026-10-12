import React from 'react';
import Link from 'next/link';

export default function ToolLayout({ children, title, description }: { children: React.ReactNode, title: string, description: string }) {
    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans">
            <nav className="border-b border-neutral-200">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold tracking-tight text-neutral-950">
                        Hydra<span className="text-blue-600">Tools</span>
                    </Link>
                    <div className="flex gap-6 text-sm font-medium text-neutral-600">
                        <Link href="/" className="hover:text-blue-600">All Tools</Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 pt-12 pb-24">
                <header className="mb-12 border-b border-neutral-100 pb-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 mb-3">{title}</h1>
                    <p className="text-lg text-neutral-600">{description}</p>
                </header>

                <div className="bg-white rounded-xl">
                    {children}
                </div>
            </main>
            
            <footer className="border-t py-12 text-center text-neutral-500 text-sm">
                <p className="font-semibold text-neutral-900 mb-2">100% Client-side. Zero Uploads.</p>
                <p>&copy; {new Date().getFullYear()} HydraTools. Privacy-first utilities.</p>
            </footer>
        </div>
    );
}
