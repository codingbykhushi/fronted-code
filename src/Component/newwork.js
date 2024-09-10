import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from data.json using the full localhost URL
        axios.get('http://localhost:3000/data.json')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error.message);
            });
    }, []);

    return (
        <div>
            <h1>Data from data.json</h1>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyComponent;
