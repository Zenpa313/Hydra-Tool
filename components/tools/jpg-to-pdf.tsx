"use client";
import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

interface ImageFile {
    file: File;
    preview: string;
}

export default function JpgToPdf() {
    const [images, setImages] = useState<ImageFile[]>([]);
    const [isConverting, setIsConverting] = useState(false);
    const [statusMsg, setStatusMsg] = useState<string | null>(null);

    const handleFiles = (files: FileList | null) => {
        if (!files) return;
        const newImages: ImageFile[] = [];
        for (let i = 0; i < files.length; i++) {
            const f = files[i];
            if (f.type.startsWith("image/")) {
                newImages.push({
                    file: f,
                    preview: URL.createObjectURL(f),
                });
            }
        }
        setImages((prev) => [...prev, ...newImages]);
    };

    const removeImage = (idx: number) => {
        setImages((prev) => prev.filter((_, i) => i !== idx));
    };

    const convertToPdf = async () => {
        if (images.length === 0) return;
        setIsConverting(true);
        setStatusMsg(null);

        try {
            const pdfDoc = await PDFDocument.create();

            for (const imgItem of images) {
                const buffer = await imgItem.file.arrayBuffer();
                let embeddedImg;

                if (imgItem.file.type === "image/png") {
                    embeddedImg = await pdfDoc.embedPng(buffer);
                } else {
                    // Default to JPEG embedding for jpg/webp
                    embeddedImg = await pdfDoc.embedJpg(buffer);
                }

                const page = pdfDoc.addPage([embeddedImg.width, embeddedImg.height]);
                page.drawImage(embeddedImg, {
                    x: 0,
                    y: 0,
                    width: embeddedImg.width,
                    height: embeddedImg.height,
                });
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes as unknown as BlobPart], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "converted-photos.pdf";
            a.click();
            URL.revokeObjectURL(url);
            setStatusMsg(`Successfully converted ${images.length} images to PDF.`);
        } catch (err: any) {
            setStatusMsg("Error converting images to PDF. Ensure files are valid JPG or PNG images.");
        } finally {
            setIsConverting(false);
        }
    };

    return (
        <div className="space-y-6">
            <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                    e.preventDefault();
                    handleFiles(e.dataTransfer.files);
                }}
                className="border-2 border-dashed border-neutral-300 rounded-2xl p-8 text-center bg-neutral-50/70 cursor-pointer"
                onClick={() => document.getElementById("jpg-to-pdf-input")?.click()}
            >
                <input
                    id="jpg-to-pdf-input"
                    type="file"
                    multiple
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={(e) => handleFiles(e.target.files)}
                />
                <div className="w-14 h-14 mx-auto rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-blue-600 shadow-sm mb-3">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 className="font-bold text-neutral-900 text-base">Select or drop JPG / PNG images here</h3>
                <p className="text-xs text-neutral-500 mt-1">Combine multiple photos into a clean, printable PDF document.</p>
            </div>

            {images.length > 0 && (
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm font-semibold">
                        <span>Selected Images ({images.length})</span>
                        <button onClick={() => setImages([])} className="text-xs text-red-600 hover:underline">
                            Clear All
                        </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {images.map((item, idx) => (
                            <div key={idx} className="relative group border rounded-xl overflow-hidden bg-neutral-100 aspect-square">
                                <img src={item.preview} alt={`upload-${idx}`} className="w-full h-full object-cover" />
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeImage(idx);
                                    }}
                                    className="absolute top-2 right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs opacity-90 hover:opacity-100"
                                >
                                    &times;
                                </button>
                                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    #{idx + 1}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={convertToPdf}
                        disabled={isConverting}
                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition disabled:opacity-50"
                    >
                        {isConverting ? "Generating PDF..." : `Convert ${images.length} Images to PDF`}
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
