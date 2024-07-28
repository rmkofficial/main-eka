import React from 'react';
import { Menu, MenuItem, ListItemIcon, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import { styled } from '@mui/system';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
    color: '#3F71A8',
    '&:hover': {
        color: '#fff',
        backgroundColor: '#3F71A8',
    },
    '& .MuiListItemIcon-root': {
        color: 'inherit',
    },
}));

const UserMenu = ({ anchorEl, open, handleClose }) => {
    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                    <PersonAddIcon />
                </ListItemIcon>
                <Typography variant="inherit">Kayıt Ol</Typography>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                    <LoginIcon />
                </ListItemIcon>
                <Typography variant="inherit">Giriş Yap</Typography>
            </StyledMenuItem>
        </Menu>
    );
};

export default UserMenu;
