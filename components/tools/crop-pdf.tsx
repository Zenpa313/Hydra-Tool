"use client";
import React from "react";
import GenericPdfTool from "./generic-pdf-tool";

export default function CropPdf() {
    return (
        <GenericPdfTool
            toolTitle="Crop PDF"
            actionLabel="Crop & Trim Margins"
            instructions="Trim excess white space and crop page margins for cleaner mobile viewing and printing."
        />
    );
}
