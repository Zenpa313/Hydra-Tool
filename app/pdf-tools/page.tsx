import manifest from '@/manifest.json';
import Link from 'next/link';
import ToolLayout from '@/components/ui/Layout';

export const metadata = {
    title: 'PDF Tools Hub — Free Online PDF Utilities | HydraTools',
    description: 'Every tool you need to work with PDFs in one place. 100% Client-side. Merge, split, compress, convert, rotate, watermark, and organize PDFs with zero uploads.',
};

export default function PdfToolsPage() {
    const pdfTools = manifest.tools.filter((t: any) => t.category === 'PDF Tools');

    return (
        <ToolLayout
            title="Every Tool You Need for PDFs. Zero Uploads."
            description="All HydraTools PDF utilities run locally in your web browser. No accounts, no watermarks, no server transfers, and no limits."
        >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 p-6 bg-blue-50/70 border border-blue-100 rounded-2xl">
                <div>
                    <h4 className="font-bold text-neutral-900 text-sm">🔒 100% Client-Side</h4>
                    <p className="text-xs text-neutral-600 mt-1">Processed locally using pdf-lib WebAssembly. Your files never touch external servers.</p>
                </div>
                <div>
                    <h4 className="font-bold text-neutral-900 text-sm">⚡ Instant Export</h4>
                    <p className="text-xs text-neutral-600 mt-1">Merge, split, stamp, and convert documents instantly without queue times.</p>
                </div>
                <div>
                    <h4 className="font-bold text-neutral-900 text-sm">🆓 Free Forever</h4>
                    <p className="text-xs text-neutral-600 mt-1">No monthly subscription limits, hidden credit tokens, or forced logins.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pdfTools.map((tool: any) => (
                    <Link
                        key={tool.id}
                        href={`/tools/${tool.id}`}
                        className="group block p-5 bg-white border border-neutral-200 rounded-xl hover:border-blue-500 hover:shadow-md transition"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                                PDF Tool
                            </span>
                            <span className="text-neutral-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition font-bold text-sm">
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

            <section className="mt-14 pt-8 border-t border-neutral-200">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">PDF Tools Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                        <h3 className="font-semibold text-neutral-900 mb-1.5">Are my documents uploaded to your servers?</h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            No. All PDF processing happens directly on your own device using WebAssembly and client-side JavaScript. None of your files or private data ever leave your computer.
                        </p>
                    </div>
                    <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                        <h3 className="font-semibold text-neutral-900 mb-1.5">Is there any file size limit?</h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            Since operations run locally, file sizes are bounded only by your browser's available memory. You can process large multi-megabyte documents without upload timeouts.
                        </p>
                    </div>
                    <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                        <h3 className="font-semibold text-neutral-900 mb-1.5">Do I need to sign up or create an account?</h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            No account, credit card, or email address is needed. The tools are completely unrestricted for students, businesses, and everyday productivity.
                        </p>
                    </div>
                    <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                        <h3 className="font-semibold text-neutral-900 mb-1.5">Will formatting or quality be degraded?</h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            No. All tools preserve original vector structures, embedded fonts, and high-resolution imagery without applying compression unless you specifically choose the compression tool.
                        </p>
                    </div>
                </div>
            </section>
        </ToolLayout>
    );
}
