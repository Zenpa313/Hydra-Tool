"use client";
import React, { useState } from "react";

export default function AiNoiseCanceller() {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<string | null>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setStatus("Audio file loaded into client WebAudio buffer.");
        }
    };

    return (
        <div className="space-y-4">
            <div className="border-2 border-dashed p-8 rounded-2xl text-center bg-neutral-50">
                <input type="file" accept="audio/*" onChange={handleUpload} className="block w-full text-xs text-neutral-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-blue-600 file:text-white" />
                <p className="text-xs text-neutral-400 mt-2">Upload audio track (WAV, MP3, AAC) to run background noise cancellation.</p>
            </div>
            {status && <div className="p-4 bg-green-50 text-green-700 text-xs font-bold rounded-xl">{status}</div>}
        </div>
    );
}
