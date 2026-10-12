"use client";
import React, { useState, useRef } from "react";

export default function ImageCompressor() {
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [compressedImage, setCompressedImage] = useState<string | null>(null);
    const [originalSize, setOriginalSize] = useState<number>(0);
    const [compressedSize, setCompressedSize] = useState<number>(0);
    const [quality, setQuality] = useState<number>(0.8);
    const [fileName, setFileName] = useState("compressed-image.jpg");
    const [isProcessing, setIsProcessing] = useState(false);

    const compress = (dataUrl: string, q: number) => {
        setIsProcessing(true);
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.drawImage(img, 0, 0);
                const compressedUrl = canvas.toDataURL("image/jpeg", q);
                setCompressedImage(compressedUrl);
                // Approximate size from base64
                const stringLength = compressedUrl.length - 'data:image/jpeg;base64,'.length;
                const sizeInBytes = 4 * Math.ceil(stringLength / 3) * 0.562489633438312;
                setCompressedSize(Math.round(sizeInBytes));
            }
            setIsProcessing(false);
        };
        img.src = dataUrl;
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setOriginalSize(file.size);
        setFileName(`compressed-${file.name.replace(/\.[^/.]+$/, "")}.jpg`);
        const reader = new FileReader();
        reader.onload = (event) => {
            const url = event.target?.result as string;
            setOriginalImage(url);
            compress(url, quality);
        };
        reader.readAsDataURL(file);
    };

    const handleQualityChange = (q: number) => {
        setQuality(q);
        if (originalImage) {
            compress(originalImage, q);
        }
    };

    const download = () => {
        if (!compressedImage) return;
        const link = document.createElement("a");
        link.href = compressedImage;
        link.download = fileName;
        link.click();
    };

    return (
        <div className="space-y-6">
            <div className="border-2 border-dashed border-neutral-300 rounded-2xl p-8 text-center bg-neutral-50/70">
                <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={handleFile}
                    className="block w-full text-sm text-neutral-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                />
                <p className="text-xs text-neutral-400 mt-2">Select a JPEG, PNG, or WEBP image to compress directly in your browser.</p>
            </div>

            {originalImage && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-white border border-neutral-200 rounded-2xl">
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-xs font-bold uppercase text-neutral-500 mb-2">
                                <span>Compression Quality</span>
                                <span className="font-mono text-blue-600">{Math.round(quality * 100)}%</span>
                            </div>
                            <input
                                type="range"
                                min="0.1"
                                max="1.0"
                                step="0.05"
                                value={quality}
                                onChange={e => handleQualityChange(parseFloat(e.target.value))}
                                className="w-full accent-blue-600"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2 text-center">
                            <div className="p-3 bg-neutral-50 rounded-xl border">
                                <span className="text-xs font-bold uppercase text-neutral-400 block">Original</span>
                                <span className="text-lg font-black font-mono">{(originalSize / 1024).toFixed(1)} KB</span>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                                <span className="text-xs font-bold uppercase text-blue-600 block">Compressed</span>
                                <span className="text-lg font-black font-mono text-blue-700">{(compressedSize / 1024).toFixed(1)} KB</span>
                            </div>
                        </div>

                        {originalSize > 0 && compressedSize > 0 && (
                            <div className="text-xs font-bold text-green-600 text-center bg-green-50 p-2.5 rounded-xl border border-green-200">
                                Reduced by {Math.max(0, Math.round(((originalSize - compressedSize) / originalSize) * 100))}%
                            </div>
                        )}

                        <button
                            onClick={download}
                            disabled={!compressedImage || isProcessing}
                            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition shadow-sm disabled:opacity-50"
                        >
                            {isProcessing ? "Compressing..." : "Download Compressed Image"}
                        </button>
                    </div>

                    <div className="flex flex-col items-center justify-center p-4 bg-neutral-50 rounded-xl border">
                        <span className="text-xs font-bold text-neutral-400 uppercase mb-2">Live Preview</span>
                        {compressedImage && (
                            <img src={compressedImage} alt="Compressed preview" className="max-h-64 object-contain rounded-lg shadow-sm border" />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
