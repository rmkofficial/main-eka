import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Logo';
import UserIcon from '../UserIcon';
import MobileDrawer from './MobileDrawer';

const MobileNavbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo sx={{ flexGrow: 1, textAlign: 'center' }} />
                    <UserIcon />
                </Toolbar>
            </AppBar>
            <MobileDrawer open={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        </>
    );
};

export default MobileNavbar;
