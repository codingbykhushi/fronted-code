import React from 'react';
import './RoleSelect.css';
import { useNavigate } from 'react-router-dom';

function RoleSelection({ onSelectRole }) {
    const navigate = useNavigate();

    const handleTenantClick = () => {
        onSelectRole('tenant');
        navigate('/tenant');
    };

    const handleLandlordClick = () => {
        onSelectRole('landlord');
        navigate('/landlord');
    };

    return (
        <div className="role-selection-container">
            <h2>Select Your Role</h2>
            <div className="role-buttons">
                <button className="role-button tenant-button" onClick={handleTenantClick}>
                    Tenant
                </button>
                <button className="role-button landlord-button" onClick={handleLandlordClick}>
                    Landlord
                </button>
            </div>
        </div>
    );
}

export default RoleSelection;
