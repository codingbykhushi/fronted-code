import React, { useState } from "react";
import Registration from "./Registration";
import Login from "./Login";
import Fforget from "./Forgetpaswor";
import './Logincss.css';

function Home({ onLogin }) {
    const [activeComponent, setActiveComponent] = useState('login');

    return (
        <div className="home-page-content">
            <div className="auth-section">
                {activeComponent === 'register' && <Registration setActiveComponent={setActiveComponent} />}
                {activeComponent === 'login' && <Login setActiveComponent={setActiveComponent} onLogin={onLogin} />}
                {activeComponent === 'forget' && <Fforget setActiveComponent={setActiveComponent} />}
            </div>
        </div>
    );
}

export default Home;
