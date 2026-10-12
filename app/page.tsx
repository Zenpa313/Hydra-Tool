import manifest from '../manifest.json';
import Link from 'next/link';
import ToolLayout from '@/components/ui/Layout';

export default function Home() {
    return (
        <ToolLayout title="Hydra Tools" description="Professional utility collection.">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {manifest.tools.map((tool) => (
                    <Link href={`/tools/${tool.id}`} key={tool.id} className="p-4 border rounded hover:border-blue-500 transition">
                        <h3 className="font-bold">{tool.name}</h3>
                        <p className="text-sm text-gray-500">{tool.category}</p>
                    </Link>
                ))}
            </div>
        </ToolLayout>
    );
}
