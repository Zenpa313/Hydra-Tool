"use client";
import dynamic from 'next/dynamic';
import React from 'react';

const ToolMap: { [key: string]: any } = {
    'word-counter': dynamic(() => import('./word-counter'), { ssr: false }),
    'json-formatter': dynamic(() => import('./json-formatter'), { ssr: false }),
    'merge-pdf': dynamic(() => import('./merge-pdf'), { ssr: false }),
    'base64-encoder': dynamic(() => import('./base64-encoder'), { ssr: false }),
    // ... add more as you add tools
};

export default function ToolWrapper({ toolId }: { toolId: string }) {
    const Component = ToolMap[toolId] || (() => <div className="p-4 text-center">Tool logic not implemented yet.</div>);
    return <Component />;
}
