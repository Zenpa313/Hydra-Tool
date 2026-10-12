"use client";
import { useState } from "react";

export default function FancyFont() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const translate = (fontMap: { [key: string]: string }) => {
        return input.split("").map(char => fontMap[char.toLowerCase()] || char).join("");
    };

    const fonts: { [key: string]: { [key: string]: string } } = {
        "Bold": { "a": "𝗮", "b": "𝗯", "c": "𝗰", "d": "𝗱", "e": "𝗲", "f": "𝗳", "g": "𝗴", "h": "𝗵", "i": "𝗶", "j": "𝗷", "k": "𝗸", "l": "𝗹", "m": "𝗺", "n": "𝗻", "o": "𝗼", "p": "𝗽", "q": "𝗾", "r": "𝗿", "s": "𝘀", "t": "𝘁", "u": "𝘂", "v": "𝘃", "w": "𝘄", "x": "𝘅", "y": "𝘆", "z": "𝘇" },
        "Italic": { "a": "𝘢", "b": "𝘣", "c": "𝘤", "d": "𝘥", "e": "𝘦", "f": "𝘧", "g": "𝘨", "h": "𝘩", "i": "𝘪", "j": "𝘫", "k": "𝘬", "l": "𝘭", "m": "𝘮", "n": "𝘯", "o": "𝘰", "p": "𝘱", "q": "𝘲", "r": "𝘳", "s": "𝘴", "t": "𝘵", "u": "𝘶", "v": "𝘷", "w": "𝘸", "x": "𝘹", "y": "𝘺", "z": "𝘻" },
        "Small Caps": { "a": "ᴀ", "b": "ʙ", "c": "ᴄ", "d": "ᴅ", "e": "ᴇ", "f": "ꜰ", "g": "ɢ", "h": "ʜ", "i": "ɪ", "j": "ᴊ", "k": "ᴋ", "l": "ʟ", "m": "ᴍ", "n": "ɴ", "o": "ᴏ", "p": "ᴘ", "q": "Q", "r": "ʀ", "s": "s", "t": "ᴛ", "u": "ᴜ", "v": "ᴠ", "w": "ᴡ", "x": "x", "y": "ʏ", "z": "ᴢ" }
    };

    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Input</label>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter text to make fancy..."
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="space-y-4">
                {Object.entries(fonts).map(([name, map]) => (
                    <div key={name} className="p-4 bg-neutral-800 rounded-xl flex justify-between items-center">
                        <span className="text-sm font-medium text-neutral-400">{name}</span>
                        <span className="text-xl font-mono text-white tracking-widest">{translate(map)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
