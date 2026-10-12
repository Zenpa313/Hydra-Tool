"use client";
import React from "react";
import GenericPdfTool from "./generic-pdf-tool";

export default function HtmlToPdf() {
    return (
        <GenericPdfTool
            toolTitle="HTML to PDF"
            actionLabel="Generate PDF from HTML"
            instructions="Convert clean HTML markup, typography, and tables into a printable PDF document."
        />
    );
}
