"use client";
import dynamic from 'next/dynamic';
import React from 'react';

// Registry of functional tools
const ToolMap: { [key: string]: any } = {
    'word-counter': dynamic(() => import('./word-counter'), { ssr: false }),
    'json-formatter': dynamic(() => import('./json-formatter'), { ssr: false }),
    'merge-pdf': dynamic(() => import('./merge-pdf'), { ssr: false }),
    'base64-encoder': dynamic(() => import('./base64-encoder'), { ssr: false }),
    'percentage-calc': dynamic(() => import('./percentage-calc'), { ssr: false }),
    'color-picker': dynamic(() => import('./color-picker'), { ssr: false }),
    'pomodoro-timer': dynamic(() => import('./pomodoro-timer'), { ssr: false }),
};

export default function ToolWrapper({ toolId }: { toolId: string }) {
    const Component = ToolMap[toolId] || (() => <div className="p-4 text-center text-neutral-400">Tool logic not implemented yet.</div>);
    return <Component />;
}
