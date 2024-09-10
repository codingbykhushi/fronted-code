import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ onLogout, role }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className={`header - container {menuOpen ? 'menu-open' : ''}`}>
                <div className="menu-icon" onClick={toggleMenu}>
                    &#9776;
                </div>
                <Link to="/" className="header-link">
                    <small>Home</small>
                </Link>
                <Link to="/about" className="header-link">
                    <small>About Us</small>
                </Link>
                <Link to="/contact" className="header-link">
                    <small>Contact Us</small>
                </Link>
                <Link to="/ourServices" className="header-link">
                    <small>Our Services</small>
                </Link>
                <Link to="/signIn" className="header-link">
                    <small>SignIn</small>
                </Link>
            </div >
        </>
    );
}

export default Header;