"use client";
import { useState, useEffect, useRef } from "react";
import QRCode from "qrcode";

export default function QrGen() {
    const [val, setVal] = useState("https://hydratools.com");
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            QRCode.toCanvas(canvasRef.current, val || " ", { width: 256 }, (error) => {
                if (error) console.error(error);
            });
        }
    }, [val]);

    return (
        <div className="space-y-6">
            <input 
                type="text"
                value={val}
                onChange={(e) => setVal(e.target.value)}
                className="w-full p-4 border rounded-xl"
                placeholder="Enter URL or text..."
            />
            <div className="flex justify-center p-4 bg-white rounded-xl border">
                <canvas ref={canvasRef} />
            </div>
            <p className="text-sm text-neutral-500 text-center">QR Code generates dynamically as you type.</p>
        </div>
    );
}
