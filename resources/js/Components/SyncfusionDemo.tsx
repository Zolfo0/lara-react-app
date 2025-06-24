import React from 'react';

interface Employee {
    OrderID: number;
    CustomerID: string;
    EmployeeID: number;
    OrderDate: string;
    ShipName: string;
}

const SyncfusionDemo: React.FC = () => {
    const data: Employee[] = [
        {
            OrderID: 10248,
            CustomerID: 'VINET',
            EmployeeID: 5,
            OrderDate: '1996-07-04',
            ShipName: 'Vins et alcools Chevalier'
        },
        {
            OrderID: 10249,
            CustomerID: 'TOMSP',
            EmployeeID: 6,
            OrderDate: '1996-07-05',
            ShipName: 'Toms Spezialitäten'
        },
        // Add more data as needed
    ];

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Tailwind Components Demo</h2>
            <div className="mb-6 flex gap-4 items-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">Primary Button</button>
                <input type="date" className="border rounded px-3 py-2" placeholder="Select a date" />
            </div>
            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ship Name</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((row) => (
                            <tr key={row.OrderID}>
                                <td className="px-6 py-4 whitespace-nowrap">{row.OrderID}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.CustomerID}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.EmployeeID}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.OrderDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{row.ShipName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SyncfusionDemo;