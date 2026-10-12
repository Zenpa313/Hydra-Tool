"use client";
import React, { useState } from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export default function AddPageNumbers() {
    const [fileName, setFileName] = useState("");
    const [pdfBytes, setPdfBytes] = useState<ArrayBuffer | null>(null);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [position, setPosition] = useState<"bottom-center" | "bottom-right" | "top-right">("bottom-center");
    const [prefix, setPrefix] = useState("Page ");
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
        } catch {
            setStatusMsg("Failed to open PDF document.");
        }
    };

    const handleAddNumbers = async () => {
        if (!pdfBytes) return;
        setIsProcessing(true);
        setStatusMsg(null);
        try {
            const doc = await PDFDocument.load(pdfBytes);
            const font = await doc.embedFont(StandardFonts.Helvetica);
            const pages = doc.getPages();

            pages.forEach((page, idx) => {
                const { width, height } = page.getSize();
                const text = `${prefix}${idx + 1} of ${pages.length}`;
                const textWidth = font.widthOfTextAtSize(text, 10);

                let x = width / 2 - textWidth / 2;
                let y = 20;

                if (position === "bottom-right") {
                    x = width - textWidth - 30;
                    y = 20;
                } else if (position === "top-right") {
                    x = width - textWidth - 30;
                    y = height - 25;
                }

                page.drawText(text, {
                    x,
                    y,
                    size: 10,
                    font,
                    color: rgb(0.2, 0.2, 0.2),
                });
            });

            const output = await doc.save();
            const blob = new Blob([output as unknown as BlobPart], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `numbered-${fileName || "document.pdf"}`;
            a.click();
            URL.revokeObjectURL(url);
            setStatusMsg(`Page numbers added successfully to ${pages.length} pages.`);
        } catch (err: any) {
            setStatusMsg("Error stamping page numbers onto PDF.");
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
                <p className="text-xs text-neutral-400 mt-2">Insert dynamic page numbering directly into every page of your PDF.</p>
            </div>

            {totalPages > 0 && (
                <div className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-4">
                    <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-neutral-900">{fileName}</span>
                        <span className="text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full text-xs">{totalPages} Pages</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                                Number Prefix
                            </label>
                            <input
                                type="text"
                                value={prefix}
                                onChange={(e) => setPrefix(e.target.value)}
                                className="w-full p-2.5 border border-neutral-300 rounded-xl text-sm"
                                placeholder="e.g. Page "
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                                Position
                            </label>
                            <select
                                value={position}
                                onChange={(e: any) => setPosition(e.target.value)}
                                className="w-full p-2.5 border border-neutral-300 rounded-xl text-sm"
                            >
                                <option value="bottom-center">Bottom Center</option>
                                <option value="bottom-right">Bottom Right</option>
                                <option value="top-right">Top Right</option>
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={handleAddNumbers}
                        disabled={isProcessing}
                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition disabled:opacity-50"
                    >
                        {isProcessing ? "Stamping Numbers..." : "Add Page Numbers and Download"}
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
