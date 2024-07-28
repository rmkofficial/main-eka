import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar/Navbar';


const Hero = dynamic(() => import('../components/Hero/Hero'), {
    ssr: false,
});

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
    );
};

export default Home;
