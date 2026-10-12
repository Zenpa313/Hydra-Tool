
import React from 'react';

export default function ToolLayout({ children, title, description }: { children: React.ReactNode, title: string, description: string }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white border-b p-4 shadow-sm">
                <div className="max-w-4xl mx-auto font-bold text-xl text-blue-600">HydraTools</div>
            </nav>
            <main className="max-w-4xl mx-auto p-6">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{title}</h1>
                <p className="text-lg text-gray-600 mb-8">{description}</p>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    {children}
                </div>
            </main>
        </div>
    );
}
