import React, { useState } from "react";
import axios from "axios";
import './Auth.css'; // Common CSS file for all forms

function Fforget({ setActiveComponent }) {
    const [forgetData, setForgetData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleForgetChange = (e) => {
        setForgetData({
            ...forgetData,
            [e.target.name]: e.target.value
        });
    };

    const handleForgetSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://localhost:4000/user/update', forgetData);
            alert('Password reset successful!');
        } catch (err) {
            console.error(err);


            alert('Password reset failed.');
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleForgetSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    onChange={handleForgetChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="New Password"
                    onChange={handleForgetChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleForgetChange}
                    required
                />
                <button type="submit" className="auth-button">Reset Password</button>
                <hr />
                <button type="button" className="switch-link" onClick={() => setActiveComponent('login')}>
                    Back to Log in
                </button>
            </form>
        </div>
    );
}

export default Fforget;
