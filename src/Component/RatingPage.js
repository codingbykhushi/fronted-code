import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RatingPage() {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const token = localStorage.getItem('token');
    const { roomId } = useParams();

    
    const handleStarClick = (value) => {
        setRating(value);
    };

    
    const submitRating = async () => {
        console.log('Submit button clicked');
        console.log('Sending data:', { roomId, rating, review });

        try {
            const response = await axios.post('http://localhost:4000/rating/rate', {
                roomId,
                rating,
                review,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'tokenInput': token
                }
            });
            console.log('Response:', response.data); 
            alert('Rating submitted successfully');
        } catch (error) {
            console.error('Error submitting rating:', error.response ? error.response.data : error.message);
            alert('Error submitting rating: ' + (error.response ? error.response.data.error : error.message));
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Rate Your Room</h2>
            <div className="card p-4">
                
                <div className="form-group mb-3">
                    <label className="form-label">Rating:</label>
                    <div>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <span
                                key={value}
                                onClick={() => handleStarClick(value)}
                                style={{
                                    fontSize: '2rem',
                                    cursor: 'pointer',
                                    color: value <= rating ? '#ffc107' : '#e4e5e9',
                                }}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
                
                
                <div className="form-group mb-3">
                    <label className="form-label">Review:</label>
                    <textarea 
                        className="form-control" 
                        rows="4" 
                        value={review} 
                        onChange={(e) => setReview(e.target.value)} 
                    />
                </div>
                
                
                <button className="btn btn-primary" onClick={submitRating}>
                    Submit Rating
                </button>
            </div>
        </div>
    );
}

export default RatingPage;
