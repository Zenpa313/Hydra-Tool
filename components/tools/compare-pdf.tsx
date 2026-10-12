"use client";
import React from "react";
import GenericPdfTool from "./generic-pdf-tool";

export default function ComparePdf() {
    return (
        <GenericPdfTool
            toolTitle="Compare PDF"
            actionLabel="Compare Document Pages"
            instructions="Compare revisions between PDF documents side by side to detect differences."
        />
    );
}
