"use client";
import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function RemovePages() {
    const [fileName, setFileName] = useState("");
    const [pdfBytes, setPdfBytes] = useState<ArrayBuffer | null>(null);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [pagesToRemove, setPagesToRemove] = useState("");
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
            setPagesToRemove(doc.getPageCount() > 1 ? `${doc.getPageCount()}` : "1");
        } catch {
            setStatusMsg("Failed to open PDF document.");
        }
    };

    const handleRemove = async () => {
        if (!pdfBytes || totalPages === 0) return;
        setIsProcessing(true);
        setStatusMsg(null);

        try {
            const srcDoc = await PDFDocument.load(pdfBytes);
            const removeSet = new Set<number>();
            const parts = pagesToRemove.split(",");

            for (const part of parts) {
                const trimmed = part.trim();
                if (trimmed.includes("-")) {
                    const [startStr, endStr] = trimmed.split("-");
                    const start = parseInt(startStr, 10);
                    const end = parseInt(endStr, 10);
                    if (!isNaN(start) && !isNaN(end)) {
                        for (let p = Math.max(1, start); p <= Math.min(totalPages, end); p++) {
                            removeSet.add(p - 1);
                        }
                    }
                } else {
                    const p = parseInt(trimmed, 10);
                    if (!isNaN(p) && p >= 1 && p <= totalPages) {
                        removeSet.add(p - 1);
                    }
                }
            }

            const keepIndices: number[] = [];
            for (let i = 0; i < totalPages; i++) {
                if (!removeSet.has(i)) {
                    keepIndices.push(i);
                }
            }

            if (keepIndices.length === 0) {
                setStatusMsg("You cannot delete every page in the document.");
                setIsProcessing(false);
                return;
            }

            const newDoc = await PDFDocument.create();
            const copied = await newDoc.copyPages(srcDoc, keepIndices);
            copied.forEach((p) => newDoc.addPage(p));

            const output = await newDoc.save();
            const blob = new Blob([output as unknown as BlobPart], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `cleaned-${fileName || "document.pdf"}`;
            a.click();
            URL.revokeObjectURL(url);
            setStatusMsg(`Removed ${removeSet.size} page(s). Kept ${keepIndices.length} page(s).`);
        } catch (err: any) {
            setStatusMsg("Error removing pages.");
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
                <p className="text-xs text-neutral-400 mt-2">Delete unwanted pages from your PDF file without uploading.</p>
            </div>

            {totalPages > 0 && (
                <div className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-4">
                    <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-neutral-900">{fileName}</span>
                        <span className="text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full text-xs">{totalPages} Pages Available</span>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                            Page numbers to remove (e.g., 2, 4-6)
                        </label>
                        <input
                            type="text"
                            value={pagesToRemove}
                            onChange={(e) => setPagesToRemove(e.target.value)}
                            className="w-full p-3 border border-neutral-300 rounded-xl font-mono text-sm"
                            placeholder="e.g. 1, 3-5"
                        />
                    </div>

                    <button
                        onClick={handleRemove}
                        disabled={isProcessing}
                        className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition disabled:opacity-50"
                    >
                        {isProcessing ? "Removing Pages..." : "Delete Pages and Download PDF"}
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
