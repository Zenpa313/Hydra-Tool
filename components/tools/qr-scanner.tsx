"use client";
import React, { useState, useRef, useEffect } from "react";
import jsQR from "jsqr";

export default function QrScanner() {
    const [scanResult, setScanResult] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);
    const [cameraActive, setCameraActive] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const [uploadedImageSrc, setUploadedImageSrc] = useState<string | null>(null);

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const animFrameRef = useRef<number | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const stopCamera = () => {
        if (animFrameRef.current) {
            cancelAnimationFrame(animFrameRef.current);
            animFrameRef.current = null;
        }
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop());
            streamRef.current = null;
        }
        setCameraActive(false);
    };

    useEffect(() => {
        return () => {
            stopCamera();
        };
    }, []);

    const processImageData = (imageData: ImageData) => {
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: "attemptBoth",
        });
        if (code && code.data) {
            setScanResult(code.data);
            setErrorMsg(null);
            return true;
        }
        return false;
    };

    const scanVideoFrame = () => {
        if (!videoRef.current || !canvasRef.current) return;
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.height = video.videoHeight;
            canvas.width = video.videoWidth;
            const ctx = canvas.getContext("2d", { willReadFrequently: true });
            if (ctx) {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const found = processImageData(imageData);
                if (found) {
                    stopCamera();
                    return;
                }
            }
        }
        animFrameRef.current = requestAnimationFrame(scanVideoFrame);
    };

    const startCamera = async () => {
        setErrorMsg(null);
        setUploadedImageSrc(null);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "environment" },
                audio: false,
            });
            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.setAttribute("playsinline", "true");
                await videoRef.current.play();
                setCameraActive(true);
                animFrameRef.current = requestAnimationFrame(scanVideoFrame);
            }
        } catch (err: any) {
            setErrorMsg("Camera access denied or unavailable. Please upload an image instead.");
            setCameraActive(false);
        }
    };

    const handleFileUpload = (file: File) => {
        if (!file.type.startsWith("image/")) {
            setErrorMsg("Please upload a valid image file (PNG, JPG, WEBP, etc.)");
            return;
        }
        stopCamera();
        setErrorMsg(null);
        setIsProcessing(true);

        const reader = new FileReader();
        reader.onload = (e) => {
            const dataUrl = e.target?.result as string;
            setUploadedImageSrc(dataUrl);

            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    setIsProcessing(false);
                    setErrorMsg("Unable to process image canvas context.");
                    return;
                }
                ctx.drawImage(img, 0, 0);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const found = processImageData(imageData);
                setIsProcessing(false);
                if (!found) {
                    setErrorMsg("No readable QR code found in this image. Ensure the code is clear and well-lit.");
                }
            };
            img.onerror = () => {
                setIsProcessing(false);
                setErrorMsg("Failed to load uploaded image.");
            };
            img.src = dataUrl;
        };
        reader.readAsDataURL(file);
    };

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    };

    const copyResult = () => {
        if (!scanResult) return;
        navigator.clipboard.writeText(scanResult);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const isUrl = (text: string) => {
        try {
            const url = new URL(text);
            return url.protocol === "http:" || url.protocol === "https:";
        } catch {
            return false;
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div className="flex gap-3">
                    <button
                        onClick={cameraActive ? stopCamera : startCamera}
                        className={`flex-1 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition ${
                            cameraActive
                                ? "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
                                : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                        }`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>{cameraActive ? "Stop Camera" : "Scan with Camera"}</span>
                    </button>
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="flex-1 py-3 px-4 rounded-xl font-semibold border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50 flex items-center justify-center gap-2 transition shadow-sm"
                    >
                        <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <span>Upload File</span>
                    </button>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                handleFileUpload(e.target.files[0]);
                            }
                        }}
                    />
                </div>

                <div
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragActive(true);
                    }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={onDrop}
                    onClick={() => !cameraActive && fileInputRef.current?.click()}
                    className={`relative border-2 border-dashed rounded-2xl min-h-[300px] flex flex-col items-center justify-center p-6 text-center transition cursor-pointer overflow-hidden ${
                        dragActive ? "border-blue-500 bg-blue-50/50" : "border-neutral-300 bg-neutral-50/60 hover:bg-neutral-50"
                    }`}
                >
                    {cameraActive ? (
                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                            <video
                                ref={videoRef}
                                className="w-full max-h-[340px] object-contain rounded-xl bg-black"
                            />
                            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                <div className="w-48 h-48 border-2 border-blue-500 rounded-xl relative animate-pulse">
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-blue-500 -mt-1 -ml-1"></div>
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-blue-500 -mt-1 -mr-1"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-blue-500 -mb-1 -ml-1"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-blue-500 -mb-1 -mr-1"></div>
                                </div>
                            </div>
                            <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-neutral-500 bg-white/80 px-3 py-1 rounded-full shadow-sm">
                                Point camera at a QR code
                            </span>
                        </div>
                    ) : uploadedImageSrc ? (
                        <div className="flex flex-col items-center gap-3">
                            <img
                                src={uploadedImageSrc}
                                alt="Uploaded QR"
                                className="max-h-[260px] object-contain rounded-xl border border-neutral-200 shadow-sm"
                            />
                            <p className="text-xs text-neutral-500">Click or drop another image to scan again</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-3 text-neutral-500 pointer-events-none">
                            <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-blue-600 shadow-sm">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-neutral-900 text-sm">Drag and drop QR code image here</p>
                                <p className="text-xs text-neutral-500 mt-1">Supports PNG, JPG, SVG, WEBP up to 25MB</p>
                            </div>
                        </div>
                    )}
                    <canvas ref={canvasRef} className="hidden" />
                </div>

                {isProcessing && (
                    <div className="flex items-center justify-center gap-2 text-sm text-blue-600 font-medium">
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <span>Analyzing QR code matrix...</span>
                    </div>
                )}

                {errorMsg && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm flex items-start gap-3">
                        <svg className="w-5 h-5 shrink-0 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{errorMsg}</span>
                    </div>
                )}
            </div>

            <div className="flex flex-col justify-between bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8">
                <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Scan Results</span>
                        {scanResult && (
                            <span className="text-xs font-semibold px-2.5 py-1 bg-green-100 text-green-800 rounded-full">
                                Code Detected
                            </span>
                        )}
                    </div>

                    {scanResult ? (
                        <div className="space-y-4">
                            <div className="p-4 bg-white border border-neutral-200 rounded-xl font-mono text-sm text-neutral-900 break-all select-all min-h-[140px] leading-relaxed">
                                {scanResult}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={copyResult}
                                    className="flex-1 min-w-[120px] py-2.5 px-4 bg-neutral-900 text-white rounded-xl font-medium text-sm hover:bg-neutral-800 flex items-center justify-center gap-2 transition shadow-sm"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                    </svg>
                                    <span>{copied ? "Copied to Clipboard!" : "Copy Content"}</span>
                                </button>

                                {isUrl(scanResult) && (
                                    <a
                                        href={scanResult}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 min-w-[120px] py-2.5 px-4 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 flex items-center justify-center gap-2 transition shadow-sm text-center"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        <span>Open Link</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="py-16 text-center text-neutral-400 space-y-2">
                            <svg className="w-12 h-12 mx-auto text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                            </svg>
                            <p className="text-sm font-medium text-neutral-600">No QR Code scanned yet</p>
                            <p className="text-xs text-neutral-400">Activate your web camera or upload an image file to extract encoded data.</p>
                        </div>
                    )}
                </div>

                <div className="pt-4 border-t border-neutral-200 mt-6 text-xs text-neutral-500 flex items-center justify-between">
                    <span>100% Client-side decodification</span>
                    <span>No files uploaded to server</span>
                </div>
            </div>
        </div>
    );
}
