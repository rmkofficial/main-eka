import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';
import UserMenu from './UserMenu';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: '#3F71A8',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    marginTop: theme.spacing(2),
    '&:hover': {
        color: '#fff',
        backgroundColor: '#3F71A8',
    },
    '& svg': {
        fontSize: '1.5rem',
    },
    width: 40,
    height: 40,
}));

const UserIcon = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <StyledIconButton onClick={handleClick} aria-label="Kullanıcı Menüsü">
                <AccountCircleIcon />
            </StyledIconButton>
            <UserMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
        </div>
    );
};

export default UserIcon;
