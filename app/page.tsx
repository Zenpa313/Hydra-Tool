import manifest from '../manifest.json';
import Link from 'next/link';
import ToolLayout from '@/components/ui/Layout';

export default function Home() {
    const categories = [
        { key: "Image", anchor: "image", title: "Image Processing, Compression & Optimization", count: 7 },
        { key: "Real Estate", anchor: "real-estate", title: "Real Estate, Property & Rental Calculators", count: 3 },
        { key: "Construction", anchor: "construction", title: "Construction, Building & Material Calculators", count: 7 },
        { key: "Data & Conversion", anchor: "data", title: "Data Parsing, CSV & Excel Converters", count: 9 },
        { key: "Developer", anchor: "developer", title: "Developer, Code & Cryptography Tools", count: 40 },
        { key: "Design & Media", anchor: "design-media", title: "Design, Color & CSS Generators", count: 35 },
        { key: "Business", anchor: "business", title: "Business, Invoices & Freelance Tools", count: 25 },
        { key: "PDF Tools", anchor: "pdf-tools", title: "PDF Utilities & Document Processing", count: 21 },
        { key: "Calculators", anchor: "calculators", title: "Calculators & Financial Utilities", count: 20 },
        { key: "Text & Writing", anchor: "text-writing", title: "Text, Typography & Content Tools", count: 18 },
        { key: "Productivity", anchor: "productivity", title: "Productivity & Everyday Utilities", count: 17 },
        { key: "Time & Date", anchor: "time-date", title: "Time, Calendar & Date Utilities", count: 14 },
    ];

    const popularIds = [
        "image-compressor", "qr-generator",
        "property-tax-calculator", "rental-yield-calculator", "square-footage-calculator",
        "brick-calculator", "gravel-calculator", "hvac-calculator",
        "csv-to-excel", "excel-to-json", "data-visualizer",
        "password-generator", "case-converter", "base64", "json-formatter",
        "age-calculator", "countdown-timer", "business-days", "invoice-generator",
        "business-card-maker", "contract-template", "hourly-rate-calculator",
        "merge-pdf", "split-pdf", "rotate-pdf", "jpg-to-pdf", "add-page-numbers",
        "concrete-volume", "word-counter", "color-picker", "percentage-calc",
        "fancy-font", "pomodoro-timer", "qr-gen", "qr-scanner"
    ];

    const popularTools = manifest.tools.filter((t: any) => popularIds.includes(t.id));

    return (
        <ToolLayout 
            title="Every Tool You Need. Zero Uploads." 
            description="HydraTools is a fast, privacy-first collection of 100 free browser utilities for finance, code, PDFs, typography, media, and everyday productivity. Runs 100% on-device in your browser."
        >
            {/* Hero Section matching AllTools */}
            <div className="mb-12 text-center sm:text-left space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    100% Client-Side. Zero Uploads.
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
                    Every Tool You Need. <span className="text-blue-600">Zero Uploads.</span>
                </h1>
                <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
                    HydraTools is a fast, privacy-first collection of free browser utilities for PDFs, developer data, business documents, CSS, images, dates, and everyday calculations.
                </p>
                <div className="flex flex-wrap gap-3 pt-2 justify-center sm:justify-start">
                    <Link href="/all-tools" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow-sm">
                        Browse all tools ({manifest.tools.length})
                    </Link>
                    <Link href="/pdf-tools" className="px-5 py-2.5 bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-bold text-sm rounded-xl transition shadow-sm">
                        Open PDF tools
                    </Link>
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
