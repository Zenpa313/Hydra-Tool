import manifest from '@/manifest.json';
import Link from 'next/link';
import ToolLayout from '@/components/ui/Layout';

export const metadata = {
    title: 'All Tools — Full Directory | HydraTools',
    description: 'Browse the complete index of 200+ free client-side browser utilities for developers, business, PDFs, CSS, and math.',
};

export default function AllToolsPage() {
    return (
        <ToolLayout
            title="All Tools Directory"
            description="Explore our full index of 211 fast, privacy-first browser tools. Zero uploads. Runs entirely in your browser."
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {manifest.tools.map((tool: any) => (
                    <Link
                        key={tool.id}
                        href={`/tools/${tool.id}`}
                        className="group block p-5 bg-white border border-neutral-200 rounded-xl hover:border-blue-500 hover:shadow-md transition"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                                {tool.category}
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
        </ToolLayout>
    );
}
