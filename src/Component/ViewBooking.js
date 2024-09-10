import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './book.css';

const MyExercise = () => {
    const [myExercises, setMyExercises] = useState([]);

    useEffect(() => {
        const fetchMyExercises = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:4000/user/my', {
                    headers: {
                        'Content-Type': 'application/json',
                        'tokenInput': token
                    }
                });
                console.log(response.data); // Inspect the data to ensure unique imgUrls
                setMyExercises(response.data);

            } catch (error) {
                console.error('Error fetching my exercises:', error);
            }
        };

        fetchMyExercises();
    }, []);

    return (
        <div className="my-exercise-container">
            <h2>Booked Room</h2>
            <div className="exercise-grid">
                {myExercises.map((myExercise, index) => (
                    <div key={myExercise.id || index} className="exercise-card">
                        {myExercise && myExercise.room ? (
                            <>
                                <img
                                    src={`${myExercise.room.imgUrl}?${new Date().getTime()}` || 'default-image-url.jpg'}
                                    alt={myExercise.room.description || 'No description'}
                                    onError={(e) => { e.target.src = 'default-image-url.jpg'; }}
                                />
                                <h3>{myExercise.room.description || 'No description'}</h3>
                                <p>Location: {myExercise.room.location || 'Unknown'}</p>
                                <p>Size: {myExercise.room.size || 'Unknown'}</p>
                                <p className="amount">Amount Paid: ₹{myExercise.amount || '0.00'}</p>
                                <p>Payment ID: {myExercise.razorpayPaymentId}</p>
                                <p className="date">Date: {new Date(myExercise.createdAt).toLocaleDateString()}</p>
                            </>
                        ) : (
                            <p>Room details not available</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyExercise;