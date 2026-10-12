import React from 'react';
import Link from 'next/link';

export default function ToolLayout({ children, title, description }: { children: React.ReactNode, title: string, description: string }) {
    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans">
            <nav className="border-b shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-neutral-950">
                        Hydra<span className="text-blue-600">Tools</span>
                    </Link>
                    <div className="flex gap-6 text-sm text-neutral-600 font-medium">
                        <Link href="/" className="hover:text-blue-600">All Tools</Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 py-12">
                <header className="mb-12">
                    <h1 className="text-4xl font-extrabold mb-3">{title}</h1>
                    <p className="text-lg text-neutral-600">{description}</p>
                </header>

                <div className="bg-white rounded-xl shadow-lg border border-neutral-100 p-8">
                    {children}
                </div>
            </main>
            
            <footer className="border-t mt-20 py-8 text-center text-neutral-500 text-sm">
                &copy; {new Date().getFullYear()} HydraTools. 100% Client-side. Zero Uploads.
            </footer>
        </div>
    );
}
