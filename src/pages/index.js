// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Categories from '../components/Categories/Categories';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Categories />
        </div>
    );
};

export default Home;
