import React from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import SocialIcons from './SocialIcons';
import NavLinks from './NavLinks';
import UserIcon from './UserIcon';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <SocialIcons />
                    <NavLinks />
                    <UserIcon />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
