"use client";
import React, { useState } from "react";

export default function CsvToExcel() {
    const [csv, setCsv] = useState("Product,Quantity,Price\nLaptop,10,999.99\nMouse,50,29.99");

    const exportExcelXml = () => {
        const rows = csv.trim().split("\n").map(r => r.split(","));
        let xml = `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Worksheet ss:Name="Sheet1">
  <Table>
`;
        rows.forEach(row => {
            xml += "   <Row>\n";
            row.forEach(cell => {
                xml += `    <Cell><Data ss:Type="String">${cell.trim()}</Data></Cell>\n`;
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
        a.download = "converted-data.xls";
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="space-y-4">
            <textarea
                value={csv}
                onChange={e => setCsv(e.target.value)}
                placeholder="Paste CSV rows here..."
                className="w-full h-48 p-4 border rounded-2xl font-mono text-sm"
            />
            <button
                onClick={exportExcelXml}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition"
            >
                Download as Excel (.xls)
            </button>
        </div>
    );
}
