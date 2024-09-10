import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>RoomRental Indore</h2>
                    <p>© 2024 RoomRental. All Rights Reserved.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#rooms">Rooms</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="#facebook">Facebook</a></li>
                        <li><a href="#twitter">Twitter</a></li>
                        <li><a href="#instagram">Instagram</a></li>
                        <li><a href="#linkedin">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Information</h3>
                    <p>Email: <a href="mailto:support@roomrentalindore.com">support@roomrentalindore.com</a></p>
                    <p>Phone: +91-9876543210</p>
                    <p>Address: 123, MG Road, Indore, Madhya Pradesh, India</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
