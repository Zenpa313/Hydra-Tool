import { notFound } from 'next/navigation';
import manifest from '../../../manifest.json';
import ToolLayout from '@/components/ui/Layout';
import ToolWrapper from '@/components/tools/ToolWrapper';

export async function generateStaticParams() {
    return manifest.tools.map((tool: any) => ({
        tool: tool.id,
    }));
}

export async function generateMetadata({ params }: { params: { tool: string } }) {
    const tool = manifest.tools.find(t => t.id === params.tool);
    if (!tool) return { title: 'Not Found' };
    return { title: tool.name, description: tool.description };
}

export default async function ToolPage({ params }: { params: { tool: string } }) {
    const tool = manifest.tools.find(t => t.id === params.tool);
    if (!tool) notFound();

    return (
        <ToolLayout title={tool.name} description={tool.description}>
            <ToolWrapper toolId={tool.id} />
            <section className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">FAQ</h2>
                <div className="space-y-4">
                    <p><strong>How does this {tool.name} tool work?</strong> It runs entirely in your browser using secure client-side JavaScript.</p>
                    <p><strong>Is my data safe?</strong> Yes, no data is ever sent to a server. Everything remains on your device.</p>
                </div>
            </section>
        </ToolLayout>
    );
}
