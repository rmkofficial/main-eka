// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Categories from '../components/Categories/Categories';
import PopulerCourses from '../components/PopularCourses/PopularCourses';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Categories />
            <PopulerCourses />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
