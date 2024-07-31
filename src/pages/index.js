// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Categories from '../components/Categories/Categories';
import PopulerCourses from '../components/PopularCourses/PopularCourses';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Categories />
            <PopulerCourses />
        </div>
    );
};

export default Home;
