"use client";
import React from "react";
import GenericPdfTool from "./generic-pdf-tool";

export default function OrganizePdf() {
    return (
        <GenericPdfTool
            toolTitle="Organize PDF"
            actionLabel="Reorganize Page Order"
            instructions="Rearrange, rotate, and sort pages in your PDF document effortlessly."
        />
    );
}
