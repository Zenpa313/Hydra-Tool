"use client";
import dynamic from 'next/dynamic';
import React from 'react';

// Create a map of ALL tools
const ToolMap: { [key: string]: any } = {
    'word-counter': dynamic(() => import('./word-counter'), { ssr: false }),
    'json-formatter': dynamic(() => import('./json-formatter'), { ssr: false }),
    'concrete-volume': dynamic(() => import('./concrete-volume'), { ssr: false }),
    'flooring-cost': dynamic(() => import('./flooring-cost'), { ssr: false }),
    'loan-amortization': dynamic(() => import('./loan-amortization'), { ssr: false }),
    'sales-tax': dynamic(() => import('./sales-tax'), { ssr: false }),
    'salary-converter': dynamic(() => import('./salary-converter'), { ssr: false }),
    'credit-card-payoff': dynamic(() => import('./credit-card-payoff'), { ssr: false }),
    'roi-calc': dynamic(() => import('./roi-calc'), { ssr: false }),
    'break-even': dynamic(() => import('./break-even'), { ssr: false }),
    'profit-margin': dynamic(() => import('./profit-margin'), { ssr: false }),
    'age-calc': dynamic(() => import('./age-calc'), { ssr: false }),
};

export default function ToolWrapper({ toolId }: { toolId: string }) {
    const Component = ToolMap[toolId] || (() => <div className="p-4 text-center">Tool logic not implemented yet.</div>);
    return <Component />;
}
