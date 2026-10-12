"use client";
import React from "react";
import GenericPdfTool from "./generic-pdf-tool";

export default function SignPdf() {
    return (
        <GenericPdfTool
            toolTitle="Sign PDF"
            actionLabel="Stamp Digital Signature"
            instructions="Place digital signatures and authorized verification stamps onto document pages."
        />
    );
}
