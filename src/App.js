import './App.css';

import TenentHeader from './Component/TenentHeader.js';  // Corrected import for TenantHeader
import Viewbooking from './Component/ViewBooking.js';
import LandlordHeader from './Component/LandlordHeader.js';  // Import LandlordHeader
import Footer from './Component/Footer.js';
import React, { useState } from 'react';
import Home from './Component/Home.js';
import Contact from './Component/Contact.js';
import About from './Component/About.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './Component/Profile.js';
import LandlordHome from './Component/LandlordHome.js';
import TenantHome from './Component/TenantHome.js';
import { UserProvider } from './Component/UserContext.js';
import Payment from './Component/Payment.js';
import Myrooms from './Component/RoomCard.js'; // Assuming this is the component for viewing rooms

import Headerr from './LoginHeader.js';  // This appears to be the login header
import Registration from './Component/Registration.js';
import Welcome from './Component/Welcome.js';
import Login from './Component/Login.js';
import SearchBar from './Component/SearchBar.js';
import RatingPage from './Component/RatingPage.js'
import OurServices from './Component/OurServices.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = (selectedRole) => {
    setIsLoggedIn(true);
    setRole(selectedRole);
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole('');
    navigate('/');
  };

  return (
    <UserProvider>
      <div className="App">
        
        {!isLoggedIn ? (
          <>
            <Headerr />

            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/signIn' element={<Home onLogin={handleLogin} />} />
              <Route path='/register' element={<Registration />} />
              <Route path='/login' element={<Login />} />
              <Route path="/rating" element={<RatingPage/>} /> 
            </Routes>
          </>
        ) : (
          <>
            {role === 'tenant' ? (<>
              <TenentHeader onLogout={handleLogout} />

              {/* < SearchBar></ SearchBar> */}
            </>

            ) : role === 'landlord' ? (
              <LandlordHeader onLogout={handleLogout} />
            ) : (
              <TenentHeader onLogout={handleLogout} /> // Fallback header
            )}
            <Routes>
              <Route path='/' element={role === 'landlord' ? <LandlordHome /> : <TenantHome />} />
              <Route path='/profile' element={<UserProfile />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/payment' element={<Payment />} />
              <Route path='/myrooms' element={role === 'tenant' ? <Viewbooking></Viewbooking> : <Myrooms />} />
              <Route path="/rate-room/:roomId" element={<RatingPage/>} /> 
              <Route path="/services" element={<OurServices/>} /> 
              {/* Add additional routes if needed */}
            </Routes>

            <Footer />
          </>
        )}
      </div>
    </UserProvider>
  );
}

export default App;
