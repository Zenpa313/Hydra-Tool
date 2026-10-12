"use client";
import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

interface UploadedPdf {
    name: string;
    size: number;
    bytes: ArrayBuffer;
    pageCount: number;
}

export default function MergePdf() {
    const [pdfList, setPdfList] = useState<UploadedPdf[]>([]);
    const [isMerging, setIsMerging] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleFiles = async (files: FileList | null) => {
        if (!files) return;
        setErrorMsg(null);
        const newPdfs: UploadedPdf[] = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type !== "application/pdf" && !file.name.endsWith(".pdf")) continue;
            try {
                const buffer = await file.arrayBuffer();
                const doc = await PDFDocument.load(buffer, { ignoreEncryption: true });
                newPdfs.push({
                    name: file.name,
                    size: file.size,
                    bytes: buffer,
                    pageCount: doc.getPageCount(),
                });
            } catch (err: any) {
                setErrorMsg(`Failed to read "${file.name}": password-protected or corrupted.`);
            }
        }
        setPdfList((prev) => [...prev, ...newPdfs]);
    };

    const removePdf = (index: number) => {
        setPdfList((prev) => prev.filter((_, i) => i !== index));
    };

    const movePdf = (fromIndex: number, toIndex: number) => {
        if (toIndex < 0 || toIndex >= pdfList.length) return;
        const updated = [...pdfList];
        const [moved] = updated.splice(fromIndex, 1);
        updated.splice(toIndex, 0, moved);
        setPdfList(updated);
    };

    const mergeAll = async () => {
        if (pdfList.length < 2) {
            setErrorMsg("Please upload at least 2 PDF files to merge.");
            return;
        }
        setIsMerging(true);
        setErrorMsg(null);
        try {
            const merged = await PDFDocument.create();
            for (const item of pdfList) {
                const srcDoc = await PDFDocument.load(item.bytes);
                const copiedPages = await merged.copyPages(srcDoc, srcDoc.getPageIndices());
                copiedPages.forEach((page) => merged.addPage(page));
            }
            const mergedBytes = await merged.save();
            const blob = new Blob([mergedBytes as unknown as BlobPart], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "merged-document.pdf";
            a.click();
            URL.revokeObjectURL(url);
        } catch (err: any) {
            setErrorMsg("An error occurred while merging the PDF files.");
        } finally {
            setIsMerging(false);
        }
    };

    const totalPages = pdfList.reduce((acc, curr) => acc + curr.pageCount, 0);

    return (
        <div className="space-y-6">
            <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                    e.preventDefault();
                    handleFiles(e.dataTransfer.files);
                }}
                className="border-2 border-dashed border-neutral-300 hover:border-blue-500 bg-neutral-50/70 hover:bg-blue-50/20 rounded-2xl p-8 text-center transition cursor-pointer"
                onClick={() => document.getElementById("merge-file-input")?.click()}
            >
                <input
                    id="merge-file-input"
                    type="file"
                    multiple
                    accept="application/pdf"
                    className="hidden"
                    onChange={(e) => handleFiles(e.target.files)}
                />
                <div className="w-14 h-14 mx-auto rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-blue-600 shadow-sm mb-3">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                </div>
                <h3 className="font-bold text-neutral-900 text-base">Select or drop PDF files here</h3>
                <p className="text-xs text-neutral-500 mt-1">Combine multiple PDF documents into one single file locally in your browser.</p>
            </div>

            {errorMsg && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
                    {errorMsg}
                </div>
            )}

            {pdfList.length > 0 && (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
                            Files to Merge ({pdfList.length}) &bull; {totalPages} total pages
                        </h4>
                        <button
                            onClick={() => setPdfList([])}
                            className="text-xs font-semibold text-red-600 hover:underline"
                        >
                            Clear All
                        </button>
                    </div>

                    <div className="space-y-2">
                        {pdfList.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-between p-3.5 bg-white border border-neutral-200 rounded-xl shadow-sm"
                            >
                                <div className="flex items-center gap-3 min-w-0">
                                    <span className="w-7 h-7 rounded-lg bg-neutral-100 text-neutral-600 font-bold text-xs flex items-center justify-center shrink-0">
                                        {idx + 1}
                                    </span>
                                    <div className="truncate">
                                        <p className="text-sm font-semibold text-neutral-900 truncate">{item.name}</p>
                                        <p className="text-xs text-neutral-500">
                                            {item.pageCount} page{item.pageCount === 1 ? "" : "s"} &bull; {(item.size / 1024 / 1024).toFixed(2)} MB
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5 shrink-0">
                                    <button
                                        onClick={() => movePdf(idx, idx - 1)}
                                        disabled={idx === 0}
                                        title="Move up"
                                        className="p-1.5 hover:bg-neutral-100 rounded text-neutral-500 disabled:opacity-20"
                                    >
                                        &uarr;
                                    </button>
                                    <button
                                        onClick={() => movePdf(idx, idx + 1)}
                                        disabled={idx === pdfList.length - 1}
                                        title="Move down"
                                        className="p-1.5 hover:bg-neutral-100 rounded text-neutral-500 disabled:opacity-20"
                                    >
                                        &darr;
                                    </button>
                                    <button
                                        onClick={() => removePdf(idx)}
                                        title="Remove"
                                        className="p-1.5 hover:bg-red-50 text-red-500 rounded"
                                    >
                                        &times;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={mergeAll}
                        disabled={isMerging || pdfList.length < 2}
                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-sm transition disabled:opacity-50"
                    >
                        {isMerging ? "Merging Documents..." : `Merge & Download ${pdfList.length} PDFs (${totalPages} Pages)`}
                    </button>
                </div>
            )}
        </div>
    );
}
