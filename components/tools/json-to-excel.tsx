"use client";
import React, { useState } from "react";

export default function JsonToExcel() {
    const [json, setJson] = useState('[\n  { "name": "Apples", "stock": 50, "price": 1.2 },\n  { "name": "Bananas", "stock": 120, "price": 0.5 }\n]');

    const exportExcel = () => {
        try {
            const data = JSON.parse(json);
            if (!Array.isArray(data) || data.length === 0) return;
            const headers = Object.keys(data[0]);

            let xml = `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Worksheet ss:Name="Sheet1">
  <Table>
   <Row>
`;
            headers.forEach(h => {
                xml += `    <Cell><Data ss:Type="String">${h}</Data></Cell>\n`;
            });
            xml += "   </Row>\n";

            data.forEach((row: any) => {
                xml += "   <Row>\n";
                headers.forEach(h => {
                    xml += `    <Cell><Data ss:Type="String">${String(row[h] ?? "")}</Data></Cell>\n`;
                });
                xml += "   </Row>\n";
            });

            xml += `  </Table>
 </Worksheet>
</Workbook>`;

            const blob = new Blob([xml], { type: "application/vnd.ms-excel" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "data.xls";
            a.click();
            URL.revokeObjectURL(url);
        } catch {
            alert("Invalid JSON array");
        }
    };

    return (
        <div className="space-y-4">
            <textarea
                value={json}
                onChange={e => setJson(e.target.value)}
                placeholder="Paste JSON array here..."
                className="w-full h-48 p-4 border rounded-2xl font-mono text-sm"
            />
            <button
                onClick={exportExcel}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition"
            >
                Download as Excel (.xls)
            </button>
        </div>
    );
}
