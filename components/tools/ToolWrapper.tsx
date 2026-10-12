"use client";
import dynamic from 'next/dynamic';
import React from 'react';

// Registry of functional tools (others will show "Coming Soon")
const FunctionalTools: Record<string, any> = {
    'word-counter': dynamic(() => import('./word-counter'), { ssr: false }),
    'json-formatter': dynamic(() => import('./json-formatter'), { ssr: false }),
    'merge-pdf': dynamic(() => import('./merge-pdf'), { ssr: false }),
    'base64-encoder': dynamic(() => import('./base64-encoder'), { ssr: false }),
    'percentage-calc': dynamic(() => import('./percentage-calc'), { ssr: false }),
    'color-picker': dynamic(() => import('./color-picker'), { ssr: false }),
    'pomodoro-timer': dynamic(() => import('./pomodoro-timer'), { ssr: false }),
    'concrete-volume': dynamic(() => import('./concrete-volume'), { ssr: false }),
    'sales-tax': dynamic(() => import('./sales-tax'), { ssr: false }),
    'qr-gen': dynamic(() => import('./qr-gen'), { ssr: false }),
};

export default function ToolWrapper({ toolId }: { toolId: string }) {
    const Component = FunctionalTools[toolId];
    
    if (!Component) {
        return (
            <div className="p-12 text-center border-2 border-dashed border-neutral-200 rounded-xl">
                <h2 className="text-xl font-bold text-neutral-800">Tool coming soon</h2>
                <p className="text-neutral-500 mt-2">We are hard at work coding this utility.</p>
            </div>
        );
    }
    return <Component />;
}
