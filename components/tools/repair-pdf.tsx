"use client";
import React from "react";
import GenericPdfTool from "./generic-pdf-tool";

export default function RepairPdf() {
    return (
        <GenericPdfTool
            toolTitle="Repair PDF"
            actionLabel="Rebuild Corrupt PDF"
            instructions="Rebuild damaged cross-reference tables and recover readable pages from corrupted files."
        />
    );
}
