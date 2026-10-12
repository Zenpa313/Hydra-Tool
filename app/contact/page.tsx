import ToolLayout from '@/components/ui/Layout';

export const metadata = {
    title: 'Contact Us — AllTools',
    description: 'Contact the AllTools maintainers for inquiries, feedback, or tool suggestions.',
};

export default function ContactPage() {
    return (
        <ToolLayout
            title="Contact AllTools"
            description="Have a tool request or feedback? Reach out to our maintainers."
        >
            <div className="space-y-6 text-sm text-neutral-700 leading-relaxed max-w-xl">
                <p>
                    We welcome suggestions for new client-side utilities, improvements, and bug reports.
                </p>
                <div className="p-6 bg-neutral-50 rounded-2xl border space-y-3">
                    <p className="font-semibold text-neutral-900">Email us at:</p>
                    <a href="mailto:support@all-tool.app" className="font-mono text-blue-600 font-bold text-base hover:underline block">
                        support@all-tool.app
                    </a>
                    <p className="text-xs text-neutral-400">We typically reply within 24 to 48 hours.</p>
                </div>
            </div>
        </ToolLayout>
    );
}
