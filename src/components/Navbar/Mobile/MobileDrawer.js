import React from 'react';
import { Drawer, List, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../Logo';
import MobileMenuItem from './MobileMenuItem';
import { styled } from '@mui/system';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useRouter } from 'next/router';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        color: '#fff',
        padding: theme.spacing(2),
    },
}));

const MobileDrawer = ({ open, handleDrawerToggle }) => {
    const router = useRouter();

    const handleMenuItemClick = (text) => {
        if (text === 'Ana Sayfa') {
            router.push('/');
        } else if (text === 'Hakkımızda') {
            document.getElementById('about-header').scrollIntoView({ behavior: 'smooth' });
        }
        handleDrawerToggle();
    };

    const menuItems = [
        'Ana Sayfa',
        'Hizmetler',
        'Hakkımızda',
        'İletişim'
    ];

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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                <Logo />
                <IconButton onClick={handleDrawerToggle} sx={{ color: '#fff' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                <TransitionGroup component={null}>
                    {menuItems.map((item, index) => (
                        <CSSTransition
                            key={index}
                            timeout={300}
                            classNames="menu-item"
                        >
                            <MobileMenuItem text={item} onClick={() => handleMenuItemClick(item)} delay={index * 100} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </List>
        </StyledDrawer>
    );
};

export default MobileDrawer;
