import { notFound } from 'next/navigation';
import ToolLayout from '@/components/ui/Layout';
import ToolWrapper from '@/components/tools/ToolWrapper';

export async function generateStaticParams() {
    const manifest = require('../../../manifest.json');
    return manifest.tools.map((tool: any) => ({
        tool: tool.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ tool: string }> }) {
    const { tool: toolId } = await params;
    const manifest = require('../../../manifest.json');
    const tool = manifest.tools.find((t: any) => t.id === toolId);
    if (!tool) return { title: 'Not Found' };
    return { title: `${tool.name} — Free Online Tool | HydraTools`, description: tool.description };
}

export default async function ToolPage({ params }: { params: Promise<{ tool: string }> }) {
    const { tool: toolId } = await params;
    const manifest = require('../../../manifest.json');
    const tool = manifest.tools.find((t: any) => t.id === toolId);
    if (!tool) notFound();

    return (
        <ToolLayout title={tool.name} description={tool.description}>
            <div className="min-h-[300px]">
                <ToolWrapper toolId={tool.id} />
            </div>

            <section className="mt-12 pt-8 border-t border-neutral-200">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                        <h3 className="font-semibold text-neutral-900 mb-1.5">How does the {tool.name} tool work?</h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            This tool operates 100% on-device in your web browser. All processing, calculations, and conversions execute immediately in client-side JavaScript without server lag.
                        </p>
                    </div>
                    <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                        <h3 className="font-semibold text-neutral-900 mb-1.5">Is my data private and secure?</h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            Yes. Zero uploads whenever possible. Your input data, calculations, and documents never leave your device or touch external servers.
                        </p>
                    </div>
                    <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                        <h3 className="font-semibold text-neutral-900 mb-1.5">Is there a daily usage limit or paywall?</h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            No. All HydraTools utilities are completely free and open to everyone for educational and everyday productivity with no account required.
                        </p>
                    </div>
                    <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200">
                        <h3 className="font-semibold text-neutral-900 mb-1.5">Can I use this on mobile devices?</h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            Yes. The interface is fully responsive and optimized for touchscreens on iOS, Android, tablets, and desktop computers.
                        </p>
                    </div>
                </div>
            </section>
        </ToolLayout>
    );
}
