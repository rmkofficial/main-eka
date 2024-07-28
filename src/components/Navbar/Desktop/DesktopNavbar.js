import React from 'react';
import { AppBar, Toolbar, Container, Box } from '@mui/material';
import SocialIcons from './SocialIcons';
import NavLinks from './NavLinks';
import UserIcon from '../UserIcon';

const DesktopNavbar = () => {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
