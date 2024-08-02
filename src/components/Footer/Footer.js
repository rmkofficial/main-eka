import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import DesktopFooter from './Desktop/DesktopFooter';
import MobileFooter from './Mobile/MobileFooter';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return isMobile ? <MobileFooter /> : <DesktopFooter />;
};

export default Footer;
