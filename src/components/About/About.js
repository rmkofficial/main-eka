// src/pages/about.js

import React, { useState, useEffect } from 'react';
import DesktopAbout from './Desktop/DesktopAbout';
import MobileAbout from './Mobile/MobileAbout';

const About = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            {isMobile ? <MobileAbout /> : <DesktopAbout />}
        </div>
    );
};

export default About;
