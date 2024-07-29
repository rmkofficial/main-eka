// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import DesktopCategories from '../components/Categories/DesktopCategories';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <DesktopCategories />
        </div>
    );
};

export default Home;
