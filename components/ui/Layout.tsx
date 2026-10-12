import React from 'react';
import Link from 'next/link';

export default function ToolLayout({ children, title, description }: { children: React.ReactNode, title: string, description: string }) {
    return (
        <div className="min-h-screen bg-[#09090b] text-neutral-50 font-['Inter',sans-serif]">
                    <nav className="border-b border-neutral-800 bg-[#09090b]">
                        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                            <Link href="/" className="text-2xl font-semibold tracking-tighter text-white">
                                Hydra<span className="text-blue-500">Tools</span>
                            </Link>
                            <div className="flex gap-6 text-sm text-neutral-400">
                                <span className="hover:text-blue-400 cursor-pointer">Explore</span>
                                <span className="hover:text-blue-400 cursor-pointer">Support</span>
                            </div>
                        </div>
                    </nav>
                    <main className="max-w-5xl mx-auto px-6 py-16">
                        <header className="mb-16">
                            <h1 className="text-6xl font-extrabold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                                {title}
                            </h1>
                            <p className="text-xl text-neutral-400">{description}</p>
                        </header>
                        <div className="bg-[#121214] border border-neutral-800 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
                            {children}
                        </div>
                    </main>
                    <footer className="py-12 text-center text-neutral-600 text-sm">
                        Powered by Hydra Engine &copy; {new Date().getFullYear()}
                    </footer>
                </div>
    );
}
