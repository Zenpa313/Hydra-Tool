"use client";
import React from "react";
import GenericPdfTool from "./generic-pdf-tool";

export default function UnlockPdf() {
    return (
        <GenericPdfTool
            toolTitle="Unlock PDF"
            actionLabel="Remove Password Security"
            instructions="Strip known permissions passwords and printing locks from PDF documents you own."
        />
    );
}
