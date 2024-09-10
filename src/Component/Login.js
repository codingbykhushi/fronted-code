import axios from "axios";
import './Auth.css';
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function Login({ setActiveComponent, onLogin }) {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        type: ''
    });

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLoginChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        const url = loginData.type === 'user' ?
            'http://localhost:4000/user/signin' :
            'http://localhost:4000/owner/signin';

        try {
            const response = await axios.post(url, loginData);
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            alert('Login successful!');
            const role = loginData.type === 'user' ? 'tenant' : 'landlord';
            setUser(response.data.user);
            onLogin(role); // Pass the role to parent component
        } catch (err) {
            console.error('Login failed:', err.response?.data || err.message);
            alert('Login failed.');
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleLoginSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    onChange={handleLoginChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleLoginChange}
                    required
                />
                <select
                    name="type"
                    className="form-select form-select-sm"
                    value={loginData.type}
                    onChange={handleLoginChange}
                    required
                >
                    <option value="" disabled>Select type</option>
                    <option value="user">User</option>
                    <option value="landlord">Landlord</option>
                </select>

                <button type="submit" className="auth-button">Log In</button>
                <hr />
                <button type="button" className="switch-link" onClick={() => setActiveComponent('register')}>
                    Create new account
                </button>
            </form>
        </div>
    );
}

export default Login;
