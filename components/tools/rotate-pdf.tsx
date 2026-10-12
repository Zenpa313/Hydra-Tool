"use client";
import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function RotatePdf() {
    const [fileName, setFileName] = useState("");
    const [pdfBytes, setPdfBytes] = useState<ArrayBuffer | null>(null);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [rotationAngle, setRotationAngle] = useState<number>(90);
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

    const handleRotate = async () => {
        if (!pdfBytes) return;
        setIsProcessing(true);
        setStatusMsg(null);
        try {
            const doc = await PDFDocument.load(pdfBytes);
            const pages = doc.getPages();
            pages.forEach((p) => {
                const current = p.getRotation().angle;
                p.setRotation({ angle: (current + rotationAngle) % 360 } as any);
            });

            const output = await doc.save();
            const blob = new Blob([output as unknown as BlobPart], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `rotated-${fileName || "doc.pdf"}`;
            a.click();
            URL.revokeObjectURL(url);
            setStatusMsg(`Rotated ${pages.length} pages by ${rotationAngle}° clockwise.`);
        } catch {
            setStatusMsg("Error rotating PDF pages.");
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
                <p className="text-xs text-neutral-400 mt-2">Rotate all pages in your PDF clockwise or upside-down.</p>
            </div>

            {totalPages > 0 && (
                <div className="p-6 bg-white border border-neutral-200 rounded-2xl space-y-4">
                    <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-neutral-900">{fileName}</span>
                        <span className="text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full text-xs">{totalPages} Pages</span>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                            Rotation Direction
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { label: "90° Clockwise", deg: 90 },
                                { label: "180° Flip", deg: 180 },
                                { label: "270° (90° Counter)", deg: 270 },
                            ].map((opt) => (
                                <button
                                    key={opt.deg}
                                    type="button"
                                    onClick={() => setRotationAngle(opt.deg)}
                                    className={`py-3 px-2 rounded-xl text-xs font-bold border transition ${
                                        rotationAngle === opt.deg
                                            ? "border-blue-600 bg-blue-50 text-blue-700"
                                            : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
                                    }`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleRotate}
                        disabled={isProcessing}
                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition disabled:opacity-50"
                    >
                        {isProcessing ? "Processing..." : `Rotate and Download PDF`}
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
