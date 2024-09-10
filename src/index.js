import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './Component/UserContext';
import Home from './Component/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>


      <App />


    </UserProvider>
  </BrowserRouter>
);


reportWebVitals();
