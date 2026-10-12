import manifest from '../manifest.json';
import Link from 'next/link';
import ToolLayout from '@/components/ui/Layout';

export default function Home() {
    return (
        <ToolLayout title="Hydra Tools" description="A collection of professional, privacy-first utility tools that run entirely in your browser.">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {manifest.tools.map((tool) => (
                    <Link href={`/tools/${tool.id}`} key={tool.id} className="block group p-5 bg-white border border-neutral-200 rounded-xl hover:border-blue-500 transition shadow-sm hover:shadow-md">
                        <h3 className="font-semibold text-neutral-950 mb-1 group-hover:text-blue-600 transition-colors">{tool.name}</h3>
                        <p className="text-xs text-neutral-500 line-clamp-2">{tool.description}</p>
                    </Link>
                ))}
            </div>
        </ToolLayout>
    );
}
