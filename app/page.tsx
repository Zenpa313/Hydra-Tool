import manifest from '../manifest.json';
import Link from 'next/link';
import ToolLayout from '@/components/ui/Layout';

export default function Home() {
    return (
        <ToolLayout title="Hydra Tools" description="Professional utility collection.">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {manifest.tools.map((tool) => (
                    <Link href={`/tools/${tool.id}`} key={tool.id} className="group p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]">
                        <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">{tool.name}</h3>
                        <p className="text-sm text-neutral-400">{tool.description}</p>
                    </Link>
                ))}
            </div>
        </ToolLayout>
    );
}
