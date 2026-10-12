"use client";
import React from "react";
import GenericPdfTool from "./generic-pdf-tool";

export default function RedactPdf() {
    return (
        <GenericPdfTool
            toolTitle="Redact PDF"
            actionLabel="Sanitize & Redact PDF"
            instructions="Permanently strip sensitive annotations, hidden form data, and embedded tracking streams."
        />
    );
}
