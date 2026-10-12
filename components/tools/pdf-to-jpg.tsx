"use client";
import React from "react";
import GenericPdfTool from "./generic-pdf-tool";

export default function PdfToJpg() {
    return (
        <GenericPdfTool
            toolTitle="PDF to JPG"
            actionLabel="Convert PDF to JPG Images"
            instructions="Render and extract high-resolution image frames from your PDF pages for easy sharing."
        />
    );
}
