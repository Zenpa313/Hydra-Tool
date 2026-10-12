"use client";
import React from "react";
import GenericPdfTool from "./generic-pdf-tool";

export default function CompressPdf() {
    return (
        <GenericPdfTool
            toolTitle="Compress PDF"
            actionLabel="Optimize & Compress PDF"
            instructions="Reduce PDF file size by stripping unreferenced metadata and optimizing stream objects."
        />
    );
}
