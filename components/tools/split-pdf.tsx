"use client";
import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function SplitPdf() {
    const [fileName, setFileName] = useState("");
    const [pdfBytes, setPdfBytes] = useState<ArrayBuffer | null>(null);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [splitRange, setSplitRange] = useState("1");
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusMsg, setStatusMsg] = useState<string | null>(null);

    const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setStatusMsg(null);
        try {
            const buffer = await file.arrayBuffer();
            const doc = await PDFDocument.load(buffer, { ignoreEncryption: true });
            setFileName(file.name);
            setPdfBytes(buffer);
            setTotalPages(doc.getPageCount());
            setSplitRange(`1-${Math.min(doc.getPageCount(), 5)}`);
        } catch {
            setStatusMsg("Failed to open PDF document. It may be encrypted or invalid.");
        }
    };

    const handleSplit = async () => {
        if (!pdfBytes || totalPages === 0) return;
        setIsProcessing(true);
        setStatusMsg(null);

        try {
            const srcDoc = await PDFDocument.load(pdfBytes);
            // Parse ranges e.g. "1-3, 5, 7-9"
            const pagesToExtract = new Set<number>();
            const parts = splitRange.split(",");
            for (const part of parts) {
                const trimmed = part.trim();
                if (trimmed.includes("-")) {
                    const [startStr, endStr] = trimmed.split("-");
                    const start = parseInt(startStr, 10);
                    const end = parseInt(endStr, 10);
                    if (!isNaN(start) && !isNaN(end)) {
                        for (let p = Math.max(1, start); p <= Math.min(totalPages, end); p++) {
                            pagesToExtract.add(p - 1);
                        }
                    }
                } else {
                    const p = parseInt(trimmed, 10);
                    if (!isNaN(p) && p >= 1 && p <= totalPages) {
                        pagesToExtract.add(p - 1);
                    }
                }
            }

            const indices = Array.from(pagesToExtract).sort((a, b) => a - b);
            if (indices.length === 0) {
                setStatusMsg("Please enter valid page numbers within range.");
                setIsProcessing(false);
                return;
            }

            const newDoc = await PDFDocument.create();
            const copied = await newDoc.copyPages(srcDoc, indices);
            copied.forEach((page) => newDoc.addPage(page));

            const outputBytes = await newDoc.save();
            const blob = new Blob([outputBytes as unknown as BlobPart], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `split-${fileName || "document.pdf"}`;
            a.click();
            URL.revokeObjectURL(url);
            setStatusMsg(`Successfully extracted ${indices.length} pages.`);
        } catch (err: any) {
            setStatusMsg("Error extracting pages from PDF.");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="border-2 border-dashed border-neutral-300 rounded-2xl p-8 text-center bg-neutral-50/70">
                <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFile}
                    className="block w-full text-sm text-neutral-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                />
                <p className="text-xs text-neutral-400 mt-2">Select a PDF to extract selected pages into a new document.</p>
            </div>

            {totalPages > 0 && (
                <div className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-4">
                    <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-neutral-900">{fileName}</span>
                        <span className="text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full text-xs">{totalPages} Pages Available</span>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                            Page Range or Commas (e.g., 1-3, 5)
                        </label>
                        <input
                            type="text"
                            value={splitRange}
                            onChange={(e) => setSplitRange(e.target.value)}
                            className="w-full p-3 border border-neutral-300 rounded-xl font-mono text-sm"
                            placeholder="e.g. 1-2, 4"
                        />
                    </div>

                    <button
                        onClick={handleSplit}
                        disabled={isProcessing}
                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition disabled:opacity-50"
                    >
                        {isProcessing ? "Extracting Pages..." : "Extract & Download PDF"}
                    </button>
                </div>
            )}

            {statusMsg && (
                <div className="p-4 bg-neutral-100 text-neutral-800 text-xs rounded-xl font-medium">
                    {statusMsg}
                </div>
            )}
        </div>
    );
}
