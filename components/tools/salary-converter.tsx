"use client";
import { useState } from "react";
export default function Salaryconverter() {
    
    const [hourly, setHourly] = useState(25);
    const yearly = hourly * 40 * 52;
    return (
        <div className="space-y-4">
            <input type="number" placeholder="Hourly Rate ($)" className="w-full p-3 border rounded" onChange={e => setHourly(Number(e.target.value))} />
            <div className="p-4 bg-gray-100 rounded-lg">Yearly Salary: ${yearly.toLocaleString()}</div>
        </div>
    );
}
