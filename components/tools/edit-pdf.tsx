"use client";
import React from "react";
import GenericPdfTool from "./generic-pdf-tool";

export default function EditPdf() {
    return (
        <GenericPdfTool
            toolTitle="Edit PDF"
            actionLabel="Save Modified PDF"
            instructions="Add annotations, highlight text, and insert vector shapes into your PDF."
        />
    );
}
