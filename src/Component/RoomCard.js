import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './book.css'

const MyRooms = () => {
    const [myRooms, setMyRooms] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMyRooms = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:4000/owner/get', {
                    headers: {
                        'Content-Type': 'application/json',
                        'tokenInput': token
                    }
                });
                setMyRooms(response.data.fetch || []); // Ensure 'fetch' is correctly accessed
            } catch (error) {
                console.error('Error fetching rooms:', error);
                setError('Failed to fetch rooms');
            }
        };

        fetchMyRooms();
    }, []);

    return (
        <div className="my-room-container">
            <h2>My Rooms</h2>
            {error ? <p>{error}</p> : (
                <div className="room-grid">
                    {myRooms.length > 0 ? (
                        myRooms.map((myRoom, index) => (
                            <div key={myRoom.id || index} className="room-card">
                                <img
                                    src={myRoom.imgUrl || 'default-image-url.jpg'}
                                    alt={myRoom.description || 'No description'}
                                    onError={(e) => { e.target.src = 'default-image-url.jpg'; }}
                                />
                                <h3>{myRoom.description || 'No description'}</h3>
                                <p>Location: {myRoom.location || 'Unknown'}</p>
                                <p>Size: {myRoom.size || 'Unknown'}</p>
                                <p className="amount">Amount Paid: ₹{myRoom.price || '0.00'}</p>
                                <p className="date">Date: {new Date(myRoom.createdAt).toLocaleDateString()}</p>
                            </div>
                        ))
                    ) : (
                        <p>No rooms found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default MyRooms;
