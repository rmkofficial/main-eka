import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Container, Box } from '@mui/material';
import SocialIcons from './SocialIcons';
import NavLinks from './NavLinks';
import UserIcon from '../UserIcon';

const DesktopNavbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AppBar position="fixed" sx={{ backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent', boxShadow: 'none' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexGrow: 1, alignItems: "center" }}>
                        <SocialIcons />
                        <NavLinks />
                        <UserIcon />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default DesktopNavbar;
