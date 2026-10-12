"use client";
import React from "react";
import GenericPdfTool from "./generic-pdf-tool";

export default function OcrPdf() {
    return (
        <GenericPdfTool
            toolTitle="OCR PDF"
            actionLabel="Extract Searchable Text"
            instructions="Process image-based scanned PDF pages into selectable, searchable text in your browser."
        />
    );
}
