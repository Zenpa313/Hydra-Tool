import ToolLayout from '@/components/ui/Layout';

export const metadata = {
    title: 'Privacy Policy — AllTools',
    description: 'Privacy Policy for AllTools. We prioritize 100% client-side processing with zero uploads.',
};

export default function PrivacyPage() {
    return (
        <ToolLayout
            title="Privacy Policy"
            description="Our commitment to your privacy and client-side processing."
        >
            <div className="space-y-6 text-sm text-neutral-700 leading-relaxed max-w-3xl">
                <p>
                    At <strong>AllTools</strong>, we believe privacy is a fundamental human right. Our tools are engineered from the ground up around a zero-upload architecture.
                </p>
                <h3 className="text-lg font-bold text-neutral-900 pt-2">1. Zero Upload Processing</h3>
                <p>
                    All files you select—including PDFs, images, text, and data arrays—are processed strictly inside your web browser using client-side JavaScript and WebAssembly. Your files are never transmitted to our servers or stored in any database.
                </p>
                <h3 className="text-lg font-bold text-neutral-900 pt-2">2. No Account or Tracking</h3>
                <p>
                    We do not require user accounts, emails, or passwords to access any tool on the site. We do not sell or monetize personal user information.
                </p>
            </div>
        </ToolLayout>
    );
}
