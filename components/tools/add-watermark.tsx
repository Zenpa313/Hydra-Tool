"use client";
import React, { useState } from "react";
import { PDFDocument, rgb, degrees, StandardFonts } from "pdf-lib";

export default function AddWatermark() {
    const [fileName, setFileName] = useState("");
    const [pdfBytes, setPdfBytes] = useState<ArrayBuffer | null>(null);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [watermarkText, setWatermarkText] = useState("CONFIDENTIAL");
    const [opacity, setOpacity] = useState(0.25);
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

    const handleApplyWatermark = async () => {
        if (!pdfBytes || !watermarkText.trim()) return;
        setIsProcessing(true);
        setStatusMsg(null);
        try {
            const doc = await PDFDocument.load(pdfBytes);
            const font = await doc.embedFont(StandardFonts.HelveticaBold);
            const pages = doc.getPages();

            pages.forEach((page) => {
                const { width, height } = page.getSize();
                const fontSize = 48;
                const textWidth = font.widthOfTextAtSize(watermarkText, fontSize);

                page.drawText(watermarkText, {
                    x: width / 2 - textWidth / 2.5,
                    y: height / 2 - 20,
                    size: fontSize,
                    font,
                    color: rgb(0.8, 0.1, 0.1),
                    opacity: opacity,
                    rotate: degrees(45),
                });
            });

            const output = await doc.save();
            const blob = new Blob([output as unknown as BlobPart], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `watermarked-${fileName || "document.pdf"}`;
            a.click();
            URL.revokeObjectURL(url);
            setStatusMsg(`Watermark applied to ${pages.length} pages.`);
        } catch {
            setStatusMsg("Error applying watermark to PDF.");
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
                <p className="text-xs text-neutral-400 mt-2">Overlay custom stamp or diagonal text watermarks on your PDF pages.</p>
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
                                Watermark Text
                            </label>
                            <input
                                type="text"
                                value={watermarkText}
                                onChange={(e) => setWatermarkText(e.target.value)}
                                className="w-full p-2.5 border border-neutral-300 rounded-xl text-sm font-bold uppercase"
                                placeholder="CONFIDENTIAL / DRAFT"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                                Transparency: {Math.round(opacity * 100)}%
                            </label>
                            <input
                                type="range"
                                min="0.1"
                                max="0.9"
                                step="0.05"
                                value={opacity}
                                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                                className="w-full mt-2"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleApplyWatermark}
                        disabled={isProcessing || !watermarkText.trim()}
                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition disabled:opacity-50"
                    >
                        {isProcessing ? "Stamping Watermark..." : "Apply Watermark and Download"}
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
