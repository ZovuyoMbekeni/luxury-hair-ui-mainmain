import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Navbar from './components/Navbar';
import Home from './components/Hero';  // Assuming this is your Home component
import Products from './components/Products';  // Assuming this is your Products component
import Services from './components/Services';  // Assuming this is your Services component
import Contact from './components/Contact';  // Assuming this is your Contact component

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<AuthPage />} />
            </Routes>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

