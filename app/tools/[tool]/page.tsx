
import { notFound } from 'next/navigation';
import manifest from '../../manifest.json';
import dynamic from 'next/dynamic';

export async function generateMetadata({ params }) {
    const tool = manifest.tools.find(t => t.id === params.tool);
    if (!tool) return {};
    return { title: tool.name, description: tool.description };
}

export default async function ToolPage({ params }) {
    const tool = manifest.tools.find(t => t.id === params.tool);
    if (!tool) notFound();

    const ToolComponent = dynamic(() => import(`@/components/tools/${tool.id}`));

    return (
        <main className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{tool.name}</h1>
            <p className="mb-6 text-gray-600">{tool.description}</p>
            
            <ToolComponent />
            
            <section className="mt-12">
                <h2 className="text-xl font-semibold">FAQ</h2>
                {/* FAQ Component Logic will go here */}
            </section>
        </main>
    );
}
