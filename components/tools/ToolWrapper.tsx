"use client";
import dynamic from 'next/dynamic';
import React from 'react';

// Registry of functional tools (others will show "Coming Soon")
const FunctionalTools: Record<string, any> = {
    // Text & Utilities
    'word-counter': dynamic(() => import('./word-counter'), { ssr: false }),
    'json-formatter': dynamic(() => import('./json-formatter'), { ssr: false }),
    'base64-encoder': dynamic(() => import('./base64-encoder'), { ssr: false }),
    'base64-decoder': dynamic(() => import('./base64-decoder'), { ssr: false }),
    'url-decoder': dynamic(() => import('./url-decoder'), { ssr: false }),
    'percentage-calc': dynamic(() => import('./percentage-calc'), { ssr: false }),
    'color-picker': dynamic(() => import('./color-picker'), { ssr: false }),
    'pomodoro-timer': dynamic(() => import('./pomodoro-timer'), { ssr: false }),
    'concrete-volume': dynamic(() => import('./concrete-volume'), { ssr: false }),
    'sales-tax': dynamic(() => import('./sales-tax'), { ssr: false }),
    'qr-gen': dynamic(() => import('./qr-gen'), { ssr: false }),
    'qr-scanner': dynamic(() => import('./qr-scanner'), { ssr: false }),

    // PDF Tools Suite (Parity with all-tool.app)
    'merge-pdf': dynamic(() => import('./merge-pdf'), { ssr: false }),
    'split-pdf': dynamic(() => import('./split-pdf'), { ssr: false }),
    'rotate-pdf': dynamic(() => import('./rotate-pdf'), { ssr: false }),
    'add-page-numbers': dynamic(() => import('./add-page-numbers'), { ssr: false }),
    'add-watermark': dynamic(() => import('./add-watermark'), { ssr: false }),
    'remove-pages': dynamic(() => import('./remove-pages'), { ssr: false }),
    'jpg-to-pdf': dynamic(() => import('./jpg-to-pdf'), { ssr: false }),

    'compress-pdf': dynamic(() => import('./pdf-suite').then(mod => mod.CompressPdf), { ssr: false }),
    'pdf-to-jpg': dynamic(() => import('./pdf-suite').then(mod => mod.PdfToJpg), { ssr: false }),
    'pdf-to-pdfa': dynamic(() => import('./pdf-suite').then(mod => mod.PdfToPdfa), { ssr: false }),
    'redact-pdf': dynamic(() => import('./pdf-suite').then(mod => mod.RedactPdf), { ssr: false }),
    'crop-pdf': dynamic(() => import('./pdf-suite').then(mod => mod.CropPdf), { ssr: false }),
    'compare-pdf': dynamic(() => import('./pdf-suite').then(mod => mod.ComparePdf), { ssr: false }),
    'html-to-pdf': dynamic(() => import('./pdf-suite').then(mod => mod.HtmlToPdf), { ssr: false }),
    'sign-pdf': dynamic(() => import('./pdf-suite').then(mod => mod.SignPdf), { ssr: false }),
    'ocr-pdf': dynamic(() => import('./pdf-suite').then(mod => mod.OcrPdf), { ssr: false }),
    'repair-pdf': dynamic(() => import('./pdf-suite').then(mod => mod.RepairPdf), { ssr: false }),
    'edit-pdf': dynamic(() => import('./pdf-suite').then(mod => mod.EditPdf), { ssr: false }),
    'organize-pdf': dynamic(() => import('./pdf-suite').then(mod => mod.OrganizePdf), { ssr: false }),
    'unlock-pdf': dynamic(() => import('./pdf-suite').then(mod => mod.UnlockPdf), { ssr: false }),
    'protect-pdf': dynamic(() => import('./pdf-suite').then(mod => mod.ProtectPdf), { ssr: false }),
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
