import React, { useState } from 'react';
import Link from 'next/link';
import manifest from '../../../manifest.json';

export const SearchBar = () => {
    const [search, setSearch] = useState("");
    return (
        <input 
            type="text" 
            placeholder="Search tools..." 
            className="w-full p-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearch(e.target.value)}
        />
    );
};

export const Sidebar = () => {
    const categories = Array.from(new Set(manifest.tools.map((t: any) => t.category)));
    return (
        <aside className="w-64 border-r pr-6 hidden md:block">
            <h2 className="font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
                {categories.map(cat => (
                    <li key={cat}>
                        <Link href={`/category/${cat}`} className="text-neutral-600 hover:text-blue-600">{cat}</Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};
