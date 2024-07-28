import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import MobileNavbar from './Mobile/MobileNavbar';
import DesktopNavbar from './Desktop/DesktopNavbar';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
        </>
    );
};

export default Navbar;
