import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import { Container, Typography } from '@mui/material';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
    );
};

export default Home;
