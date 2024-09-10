import React, { useContext } from "react";
import { UserContext } from "./UserContext.js";
import './profile.css';

function UserProfile() {
    const { user } = useContext(UserContext);
    console.log(user);


    if (!user) {
        return <div>Please log in to view your profile.</div>;
    }

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            {user.profilePicture && <img src={user.profilePicture} alt="Profile" />}
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Contact:</strong> {user.contact}</p>

            <p><strong>Adhar Number:</strong> {user.adharnumber}</p>
        </div>
    );
}

export default UserProfile;
