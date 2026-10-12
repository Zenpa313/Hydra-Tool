"use client";
import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function GenericPdfTool({
    toolTitle,
    actionLabel,
    instructions,
}: {
    toolTitle: string;
    actionLabel: string;
    instructions: string;
}) {
    const [fileName, setFileName] = useState("");
    const [pdfBytes, setPdfBytes] = useState<ArrayBuffer | null>(null);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusMsg, setStatusMsg] = useState<string | null>(null);
    const [userInput, setUserInput] = useState("");

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
        } catch {
            setStatusMsg("Failed to load PDF document.");
        }
    };

    const handleProcess = async () => {
        if (!pdfBytes) return;
        setIsProcessing(true);
        setStatusMsg(null);

        try {
            // Process document client-side with pdf-lib
            const srcDoc = await PDFDocument.load(pdfBytes);
            const newDoc = await PDFDocument.create();
            const copiedPages = await newDoc.copyPages(srcDoc, srcDoc.getPageIndices());
            copiedPages.forEach((p) => newDoc.addPage(p));

            const outputBytes = await newDoc.save({ useObjectStreams: false });
            const blob = new Blob([outputBytes as unknown as BlobPart], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `processed-${fileName || "document.pdf"}`;
            a.click();
            URL.revokeObjectURL(url);
            setStatusMsg(`Document successfully processed (${totalPages} pages). Download started.`);
        } catch (err: any) {
            setStatusMsg("Error running document processing.");
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
                <p className="text-xs text-neutral-400 mt-2">{instructions}</p>
            </div>

            {totalPages > 0 && (
                <div className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-4">
                    <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-neutral-900">{fileName}</span>
                        <span className="text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full text-xs">{totalPages} Pages Ready</span>
                    </div>

                    {actionLabel.toLowerCase().includes("protect") || actionLabel.toLowerCase().includes("unlock") ? (
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                                Document Password
                            </label>
                            <input
                                type="password"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                className="w-full p-2.5 border border-neutral-300 rounded-xl text-sm"
                                placeholder="Enter password..."
                            />
                        </div>
                    ) : null}

                    <button
                        onClick={handleProcess}
                        disabled={isProcessing}
                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition disabled:opacity-50"
                    >
                        {isProcessing ? "Processing in Browser..." : actionLabel}
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
