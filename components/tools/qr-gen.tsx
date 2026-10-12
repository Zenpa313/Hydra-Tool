"use client";
import { useState, useEffect } from "react";
import QRCode from "qrcode";

export default function QrGen() {
    const [val, setVal] = useState("https://hydratools.com");
    const [size, setSize] = useState(256);
    const [errorLevel, setErrorLevel] = useState('M');
    const [fgColor, setFgColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#ffffff');
    const [qrCodeData, setQrCodeData] = useState<string>('');

    // Generate QR
    useEffect(() => {
        QRCode.toDataURL(val, { 
            width: size,
            errorCorrectionLevel: errorLevel as any,
            color: { dark: fgColor, light: bgColor } 
        }, (err, url) => {
            if (!err) setQrCodeData(url);
        });
    }, [val, size, errorLevel, fgColor, bgColor]);

    const download = () => {
        const link = document.createElement("a");
        link.href = qrCodeData;
        link.download = "qrcode.png";
        link.click();
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div>
                   <label className="block text-sm font-semibold text-neutral-700 mb-2">Text or URL</label>
                   <textarea 
                       value={val} 
                       onChange={(e) => setVal(e.target.value)}
                       className="w-full p-4 border rounded-xl h-32 focus:ring-2 focus:ring-blue-500"
                   />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">Size (px)</label>
                        <input type="number" value={size} onChange={e => setSize(Number(e.target.value))} className="w-full p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">Error Correction</label>
                        <select value={errorLevel} onChange={e => setErrorLevel(e.target.value)} className="w-full p-2 border rounded-lg">
                            <option value="L">Low (7%)</option>
                            <option value="M">Medium (15%)</option>
                            <option value="Q">Quartile (25%)</option>
                            <option value="H">High (30%)</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">Foreground Color</label>
                        <div className="flex gap-2">
                             <input type="color" value={fgColor} onChange={e => setFgColor(e.target.value)} className="h-10 w-10 border rounded-lg" />
                             <input type="text" value={fgColor} onChange={e => setFgColor(e.target.value)} className="flex-1 p-2 border rounded-lg font-mono text-sm" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">Background Color</label>
                        <div className="flex gap-2">
                             <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} className="h-10 w-10 border rounded-lg" />
                             <input type="text" value={bgColor} onChange={e => setBgColor(e.target.value)} className="flex-1 p-2 border rounded-lg font-mono text-sm" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-neutral-50 rounded-2xl p-8 border">
                {qrCodeData ? (
                    <img src={qrCodeData} alt="QR Code" className="border-4 border-white shadow-lg" />
                ) : (
                    <div className="text-neutral-400">Preview will appear here</div>
                )}
                
                <button 
                  onClick={download}
                  disabled={!qrCodeData}
                  className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50"
                  >
                  Download PNG
                </button>
            </div>
        </div>
    );
}
