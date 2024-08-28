import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Products />
            <Services />
            <Contact />
        </>
    );
};

export default Home;
