// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Categories from '../components/Categories/Categories';
import PopulerCourses from '../components/PopularCourses/PopularCourses';
import About from '../components/About/About';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Categories />
            <PopulerCourses />
            <About />
        </div>
    );
};

export default Home;
