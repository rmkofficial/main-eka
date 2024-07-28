import React from 'react';
import { Drawer, List, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../Logo';
import MobileMenuItem from './MobileMenuItem';
import { styled } from '@mui/system';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)', // Transparan arka plan
        color: '#fff', // Yazı rengi beyaz
        padding: theme.spacing(2),
    },
}));

const MobileDrawer = ({ open, handleDrawerToggle }) => {
    return (
        <StyledDrawer
            variant="temporary"
            anchor="top"
            open={open}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Logo />
                <IconButton onClick={handleDrawerToggle} sx={{ color: '#fff' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                <MobileMenuItem text="Ana Sayfa" onClick={handleDrawerToggle} />
                <MobileMenuItem text="Hizmetler" onClick={handleDrawerToggle} />
                <MobileMenuItem text="Hakkımızda" onClick={handleDrawerToggle} />
                <MobileMenuItem text="İletişim" onClick={handleDrawerToggle} />
            </List>
        </StyledDrawer>
    );
};

export default MobileDrawer;
