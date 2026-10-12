import manifest from '../manifest.json';
import Link from 'next/link';
import ToolLayout from '@/components/ui/Layout';

export default function Home() {
    return (
        <ToolLayout title="Every Tool You Need. Zero Uploads." description="HydraTools is a fast, privacy-first collection of free browser utilities for PDFs, developer data, business documents, CSS, images, dates, and everyday calculations.">
            <h2 className="text-2xl font-bold text-neutral-950 mb-6">Popular Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {manifest.tools.slice(0, 12).map((tool) => (
                    <Link href={`/tools/${tool.id}`} key={tool.id} className="block group p-6 bg-white border border-neutral-100 rounded-xl hover:border-blue-500 hover:shadow-md transition">
                        <h3 className="font-semibold text-neutral-950 mb-1 group-hover:text-blue-600">{tool.name}</h3>
                        <p className="text-sm text-neutral-500">{tool.description}</p>
                    </Link>
                ))}
            </div>
        </ToolLayout>
    );
}
