import React from 'react';
import './page1tab1.css'

export const Page1Tab1 = () => {
    const columns = ['Name', 'Age', 'City'];
    const data = [
        { id: 1, name: 'Alice', age: 25, city: 'New York' },
        { id: 2, name: 'Bob', age: 30, city: 'Los Angeles' },
        { id: 3, name: 'Charlie', age: 28, city: 'Chicago' },
        { id: 4, name: 'David', age: 35, city: 'Houston' },
    ];
    return (
        < p>
            Page1Tab1
            <div>
                <h2>Sample Table</h2>
                <table className="sample-table">
                    <thead>
                        <tr>
                            {columns.map(column => (
                                <th key={column}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr key={row.id}>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                                <td>{row.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            );
    </p >
    );
}
