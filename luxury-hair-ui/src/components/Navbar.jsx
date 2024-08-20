import React from 'react';
import '../assets/style.css';

const Navbar = () => {
    return (
        <nav>
            <h1>Luxury Hair</h1>
            <ul>
                <li><a href="Hero.jsx">Home</a></li>
                <li><a href="Products.jsx">Products</a></li>
                <li><a href="Services.jsx">Services</a></li>
                <li><a href="Contact.jsx">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
