"use client";
import React from "react";
import GenericPdfTool from "./generic-pdf-tool";

export default function ProtectPdf() {
    return (
        <GenericPdfTool
            toolTitle="Protect PDF"
            actionLabel="Encrypt with Password"
            instructions="Set robust password protection and AES encryption to prevent unauthorized access."
        />
    );
}
