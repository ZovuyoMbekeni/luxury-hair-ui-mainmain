import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css';

const Navbar = () => {
    return (
        <nav>
            <h1>Luxury Hair</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

