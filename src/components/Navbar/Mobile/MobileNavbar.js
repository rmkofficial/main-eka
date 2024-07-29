import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import Logo from '../Logo';
import UserIcon from '../UserIcon';
import MobileDrawer from './MobileDrawer';
import { styled } from '@mui/system';
import Image from 'next/image';
import hamburgerIcon from '../../../../public/hamburger-icon.png';

const StyledMenuIconButton = styled(IconButton)(({ theme }) => ({
    color: '#3F71A8',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    marginTop: theme.spacing(2),
    '&:hover': {
        color: '#fff',
        backgroundColor: '#3F71A8',
    },
    width: 40,
    height: 40,
}));

const MobileNavbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

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
        <>
            <AppBar position="fixed" sx={{ backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent', boxShadow: 'none' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <StyledMenuIconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <Box sx={{ width: 24, height: 24, position: 'relative' }}>
                            <Image
                                src={hamburgerIcon}
                                alt="Menu"
                                fill
                                sizes="40px"
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>
                    </StyledMenuIconButton>
                    <Logo sx={{ flexGrow: 1, textAlign: 'center' }} />
                    <UserIcon />
                </Toolbar>
            </AppBar>
            <MobileDrawer open={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        </>
    );
};

export default MobileNavbar;
