import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import MobileHero from './MobileHero';
import DesktopHero from './DesktopHero';

const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return isMobile ? <MobileHero /> : <DesktopHero />;
};

export default Hero;
