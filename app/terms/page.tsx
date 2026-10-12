import ToolLayout from '@/components/ui/Layout';

export const metadata = {
    title: 'Terms of Service — AllTools',
    description: 'Terms of Service for using AllTools free browser utilities.',
};

export default function TermsPage() {
    return (
        <ToolLayout
            title="Terms of Service"
            description="Simple and transparent terms for using our free utilities."
        >
            <div className="space-y-6 text-sm text-neutral-700 leading-relaxed max-w-3xl">
                <p>
                    By using <strong>AllTools</strong>, you agree to these simple terms of service.
                </p>
                <h3 className="text-lg font-bold text-neutral-900 pt-2">1. Use License</h3>
                <p>
                    You are free to use all tools, utilities, and calculators for both personal and commercial projects without fee or restriction.
                </p>
                <h3 className="text-lg font-bold text-neutral-900 pt-2">2. As-Is Service</h3>
                <p>
                    AllTools is provided on an &quot;as is&quot; basis without warranties of any kind. You are responsible for verifying mathematical and analytical calculations before applying them to critical financial or construction tasks.
                </p>
            </div>
        </ToolLayout>
    );
}
