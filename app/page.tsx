import manifest from '../manifest.json';
import Link from 'next/link';
import ToolLayout from '@/components/ui/Layout';

export default function Home() {
    const categories = [
        { key: "Calculators", anchor: "calculators", title: "Calculators & Financial Utilities", count: 20 },
        { key: "Developer", anchor: "developer", title: "Developer & Data Tools", count: 20 },
        { key: "Text & Writing", anchor: "text-writing", title: "Text, Typography & Content Tools", count: 20 },
        { key: "Design & Media", anchor: "design-media", title: "Design, Color & Media Converters", count: 20 },
        { key: "Productivity", anchor: "productivity", title: "Productivity & Everyday Utilities", count: 20 },
    ];

    const popularIds = [
        "concrete-volume", "json-formatter", "word-counter", "color-picker",
        "base64-encoder", "percentage-calc", "loan-amortization", "merge-pdf",
        "fancy-font", "pomodoro-timer", "qr-gen", "password-gen"
    ];

    const popularTools = manifest.tools.filter((t: any) => popularIds.includes(t.id));

    return (
        <ToolLayout 
            title="Every Tool You Need. Zero Uploads." 
            description="HydraTools is a fast, privacy-first collection of 100 free browser utilities for finance, code, PDFs, typography, media, and everyday productivity. Runs 100% on-device in your browser."
        >
            {/* Value Proposition Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 p-6 bg-blue-50/60 border border-blue-100 rounded-2xl">
                <div className="flex items-start gap-3">
                    <span className="text-xl">⚡</span>
                    <div>
                        <h4 className="text-sm font-bold text-neutral-900">100% Client-Side</h4>
                        <p className="text-xs text-neutral-600 mt-0.5">Calculations execute instantly in JavaScript. No server processing delays.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <span className="text-xl">🔒</span>
                    <div>
                        <h4 className="text-sm font-bold text-neutral-900">Zero Uploads</h4>
                        <p className="text-xs text-neutral-600 mt-0.5">Your files, tokens, and data never leave your browser sandbox.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <span className="text-xl">🆓</span>
                    <div>
                        <h4 className="text-sm font-bold text-neutral-900">No Paywalls or Login</h4>
                        <p className="text-xs text-neutral-600 mt-0.5">Unlimited access to all 100 tools without account creation or fees.</p>
                    </div>
                </div>
            </div>

            {/* Popular Tools Section */}
            <section id="popular" className="mb-16">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-extrabold text-neutral-950">Popular Tools</h2>
                        <p className="text-sm text-neutral-500">Most-used browser utilities this week</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-full">
                        {popularTools.length} Featured
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {popularTools.map((tool: any) => (
                        <Link 
                            href={`/tools/${tool.id}`} 
                            key={tool.id} 
                            className="group block p-5 bg-white border border-neutral-200 rounded-xl hover:border-blue-500 hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                                    {tool.category}
                                </span>
                                <span className="text-neutral-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition transform text-sm font-bold">
                                    →
                                </span>
                            </div>
                            <h3 className="font-bold text-base text-neutral-950 group-hover:text-blue-600 transition-colors mb-1">
                                {tool.name}
                            </h3>
                            <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                                {tool.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* All Tools Grouped by Category */}
            <div id="categories" className="space-y-16">
                {categories.map((cat) => {
                    const toolsInCategory = manifest.tools.filter((t: any) => t.category === cat.key);
                    return (
                        <section key={cat.key} id={cat.anchor} className="scroll-mt-24">
                            <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-neutral-950">{cat.title}</h3>
                                    <p className="text-xs text-neutral-500 mt-0.5">Explore {toolsInCategory.length} dedicated {cat.key.toLowerCase()} tools</p>
                                </div>
                                <span className="text-xs font-bold bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full">
                                    {toolsInCategory.length} Tools
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {toolsInCategory.map((tool: any) => (
                                    <Link 
                                        href={`/tools/${tool.id}`} 
                                        key={tool.id} 
                                        className="group block p-4 bg-white border border-neutral-200 rounded-xl hover:border-blue-500 hover:shadow-sm transition"
                                    >
                                        <div className="flex items-center justify-between mb-1.5">
                                            <h4 className="font-semibold text-sm text-neutral-950 group-hover:text-blue-600 transition-colors">
                                                {tool.name}
                                            </h4>
                                            <span className="text-neutral-300 group-hover:text-blue-500 text-xs">→</span>
                                        </div>
                                        <p className="text-xs text-neutral-500 line-clamp-2 leading-normal">
                                            {tool.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Comprehensive SEO & FAQ Section */}
            <section className="mt-20 pt-12 border-t border-neutral-200">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-3xl font-extrabold text-neutral-950">Frequently Asked Questions</h2>
                    <p className="text-sm text-neutral-600 mt-2">
                        Everything you need to know about HydraTools and client-side web utility processing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
                        <h4 className="font-bold text-base text-neutral-900 mb-2">What does &quot;100% Client-Side&quot; mean?</h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            It means that the software runs on your computer or phone using modern browser technologies (HTML5, Canvas, Web Crypto, WebAssembly). When you format JSON, calculate concrete, or resize a photo, your device does the work. No files or strings are uploaded to any server.
                        </p>
                    </div>

                    <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
                        <h4 className="font-bold text-base text-neutral-900 mb-2">Are HydraTools utilities completely free?</h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            Yes. HydraTools is an open-source, non-profit educational platform built to provide free, unrestricted utility access to students, developers, creators, and professionals worldwide.
                        </p>
                    </div>

                    <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
                        <h4 className="font-bold text-base text-neutral-900 mb-2">Can I use these tools on mobile devices?</h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            Yes. Every tool is built with mobile-first responsive design. Whether you are using Safari on iOS, Chrome on Android, or a desktop browser, tools adjust to your screen dimensions seamlessly.
                        </p>
                    </div>

                    <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
                        <h4 className="font-bold text-base text-neutral-900 mb-2">How is HydraTools different from other tool sites?</h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            Unlike traditional utility sites that force you to upload files, wait in server queues, solve captchas, or deal with aggressive pop-up advertisements, HydraTools runs immediately with zero latency and complete data privacy.
                        </p>
                    </div>
                </div>
            </section>
        </ToolLayout>
    );
}
