import React, { useState } from "react";
import axios from "axios";
import './Auth.css';

function Registration({ setActiveComponent }) {
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        contact: '',
        password: '',
        adharnumber: '',
        type: ''
    });

    const [errors, setErrors] = useState({});

    const handleRegisterChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });


        setErrors({
            ...errors,
            [e.target.name]: ''
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!registerData.username) newErrors.username = 'Username is required.';
        if (!registerData.email) newErrors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(registerData.email)) newErrors.email = 'Email is invalid.';
        if (!registerData.contact) newErrors.contact = 'Contact number is required.';
        else if (!/^\d{10}$/.test(registerData.contact)) newErrors.contact = 'Contact number must be exactly 10 digits.';
        if (!registerData.password) newErrors.password = 'Password is required.';
        else if (registerData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long.';
        if (!registerData.adharnumber) newErrors.adharnumber = 'Aadhaar number is required.';
        else if (!/^\d{12}$/.test(registerData.adharnumber)) newErrors.adharnumber = 'Aadhaar number must be exactly 12 digits.';
        if (!registerData.type) newErrors.type = 'Type is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        const url = registerData.type === 'user' ?
            'http://localhost:4000/user/signup' :
            'http://localhost:4000/owner/signup';

        try {
            const response = await axios.post(url, registerData);
            console.log(response.data);
            alert('Registration successful!');
            setActiveComponent('login');
        } catch (err) {
            console.error(err);
            alert('Registration failed.');
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleRegisterSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={registerData.username}
                    onChange={handleRegisterChange}
                    required
                />
                {errors.username && <p className="error-text">{errors.username}</p>}

                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    required
                />
                {errors.email && <p className="error-text">{errors.email}</p>}

                <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    value={registerData.contact}
                    onChange={handleRegisterChange}
                    pattern="\d{10}"
                    title="Please enter exactly 10 digits."
                    required
                />
                {errors.contact && <p className="error-text">{errors.contact}</p>}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    minLength="6"
                    title="Password must be at least 6 characters long."
                    required
                />
                {errors.password && <p className="error-text">{errors.password}</p>}

                <input
                    type="text"
                    name="adharnumber"
                    placeholder="Aadhaar Number"
                    value={registerData.adharnumber}
                    onChange={handleRegisterChange}
                    pattern="\d{12}"
                    title="Please enter exactly 12 digits."
                    required
                />
                {errors.adharnumber && <p className="error-text">{errors.adharnumber}</p>}

                <select
                    name="type"
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    value={registerData.type}
                    onChange={handleRegisterChange}
                    required
                >
                    <option value="" disabled>Select type</option>
                    <option value="user">User</option>
                    <option value="admin">Landlord</option>
                </select>
                {errors.type && <p className="error-text">{errors.type}</p>}

                <button type="submit" className="auth-button">Sign Up</button>
                <hr />
                <button type="button" className="switch-link" onClick={() => setActiveComponent('login')}>
                    Already have an account? Log in
                </button>
            </form>
        </div>
    );
}

export default Registration;