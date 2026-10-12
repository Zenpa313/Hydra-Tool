"use client";
import React, { useState } from "react";
import GenericPdfTool from "./generic-pdf-tool";

export function CompressPdf() {
    return (
        <GenericPdfTool
            toolTitle="Compress PDF"
            actionLabel="Optimize & Compress PDF"
            instructions="Compress PDF files in your browser with optimized structure. Zero server uploads."
        />
    );
}

export function PdfToPdfa() {
    return (
        <GenericPdfTool
            toolTitle="PDF to PDF/A"
            actionLabel="Convert to Archival PDF/A"
            instructions="Standardize and conform your PDF for long-term archiving and records compliance."
        />
    );
}

export function UnlockPdf() {
    return (
        <GenericPdfTool
            toolTitle="Unlock PDF"
            actionLabel="Unlock & Strip Restrictions"
            instructions="Remove permissions and print restrictions from accessible PDF files locally."
        />
    );
}

export function ProtectPdf() {
    return (
        <GenericPdfTool
            toolTitle="Protect PDF"
            actionLabel="Encrypt & Protect PDF"
            instructions="Set password security and encrypt your document directly in your browser."
        />
    );
}

export function RepairPdf() {
    return (
        <GenericPdfTool
            toolTitle="Repair PDF"
            actionLabel="Repair & Rebuild PDF"
            instructions="Rebuild internal PDF cross-reference tables and recover readable pages."
        />
    );
}

export function OrganizePdf() {
    return (
        <GenericPdfTool
            toolTitle="Organize PDF"
            actionLabel="Reorganize & Normalize PDF"
            instructions="Sort, reorder, and standardize page trees in your PDF file."
        />
    );
}

export function CropPdf() {
    return (
        <GenericPdfTool
            toolTitle="Crop PDF"
            actionLabel="Crop & Trim Margins"
            instructions="Trim excess white space and adjust visible page boxes for printing or reading."
        />
    );
}

export function RedactPdf() {
    return (
        <GenericPdfTool
            toolTitle="Redact PDF"
            actionLabel="Sanitize & Redact PDF"
            instructions="Strip sensitive metadata and redact hidden document stream objects."
        />
    );
}

export function ComparePdf() {
    return (
        <GenericPdfTool
            toolTitle="Compare PDF"
            actionLabel="Compare PDF Pages"
            instructions="Compare versions of documents side by side to spot revisions and edits."
        />
    );
}

export function HtmlToPdf() {
    return (
        <GenericPdfTool
            toolTitle="HTML to PDF"
            actionLabel="Convert HTML to PDF"
            instructions="Render HTML formatting, tables, and web content into a clean PDF document."
        />
    );
}

export function SignPdf() {
    return (
        <GenericPdfTool
            toolTitle="Sign PDF"
            actionLabel="Sign & Stamp PDF"
            instructions="Draw your signature or place digital stamps onto document pages safely."
        />
    );
}

export function OcrPdf() {
    return (
        <GenericPdfTool
            toolTitle="OCR PDF"
            actionLabel="Run Local OCR on PDF"
            instructions="Extract text layers from scanned documents using client-side recognition."
        />
    );
}

export function EditPdf() {
    return (
        <GenericPdfTool
            toolTitle="Edit PDF"
            actionLabel="Save & Update PDF"
            instructions="Edit text elements, shapes, annotations, and forms in your PDF."
        />
    );
}

export function PdfToJpg() {
    return (
        <GenericPdfTool
            toolTitle="PDF to JPG"
            actionLabel="Convert Pages to JPG"
            instructions="Extract high-resolution image frames from your PDF pages for sharing."
        />
    );
}
