import ToolLayout from '@/components/ui/Layout';

export const metadata = {
    title: 'About — AllTools',
    description: 'Learn more about AllTools, our privacy-first design, and our 100% client-side browser utilities.',
};

export default function AboutPage() {
    return (
        <ToolLayout
            title="About AllTools"
            description="Fast, privacy-first browser utilities designed for zero uploads and client-side processing."
        >
            <div className="space-y-6 text-sm text-neutral-700 leading-relaxed max-w-3xl">
                <p>
                    <strong>AllTools</strong> was built with a simple premise: everyday tools for PDFs, developer utilities, text formatting, and calculations should run entirely on your own computer without sending your data to remote servers.
                </p>
                <h3 className="text-lg font-bold text-neutral-900 pt-2">Why Client-Side?</h3>
                <p>
                    When you use online utilities to convert an image, compress a document, or generate a password, your sensitive data should never be saved in a remote cloud database. We utilize modern WebAssembly and HTML5 APIs so your browser handles 100% of the computation locally.
                </p>
                <h3 className="text-lg font-bold text-neutral-900 pt-2">Free & No Accounts</h3>
                <p>
                    There are no paid plans, no artificial paywalls, and no account requirements. Everything is ready to use immediately whenever you open a page.
                </p>
            </div>
        </ToolLayout>
    );
}
