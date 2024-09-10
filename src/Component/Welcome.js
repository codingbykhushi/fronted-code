import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
// import './p1.jpg';
import p1 from './p1.jpg';

function Welcome() {
    return (
        <div className="image-container">
            <img src={p1} alt="Welcome" className="background-image" />
            <div className="text-overlay">
                <h1>Welcome to the React App</h1>
                <p>This is a simple React app using React Router, Axios, and Material-UI.</p>
            </div>
        </div>
    );
}

export default Welcome;