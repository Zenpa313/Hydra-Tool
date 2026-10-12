"use client";
import React from "react";
import GenericPdfTool from "./generic-pdf-tool";

export default function PdfToPdfa() {
    return (
        <GenericPdfTool
            toolTitle="PDF to PDF/A"
            actionLabel="Convert to Archival PDF/A"
            instructions="Standardize your document for ISO-compliant long-term archiving and records retention."
        />
    );
}
