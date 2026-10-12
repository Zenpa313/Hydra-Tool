"use client";
import { useState } from "react";
import { PDFDocument } from 'pdf-lib';

export default function MergePdf() {
    const [files, setFiles] = useState<FileList | null>(null);

    const merge = async () => {
        if (!files) return;
        const mergedPdf = await PDFDocument.create();
        for (let i = 0; i < files.length; i++) {
            const bytes = await files[i].arrayBuffer();
            const pdf = await PDFDocument.load(bytes);
            const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            pages.forEach(p => mergedPdf.addPage(p));
        }
        const pdfBytes = await mergedPdf.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'merged.pdf';
        link.click();
    };

    return (
        <div className="space-y-4">
            <input type="file" multiple onChange={(e) => setFiles(e.target.files)} className="p-2 border rounded" />
            <button onClick={merge} className="bg-blue-600 text-white p-3 rounded">Merge PDFs</button>
        </div>
    );
}
