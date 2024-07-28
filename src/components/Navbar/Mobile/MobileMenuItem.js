import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const menuItemEnter = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const StyledListItem = styled(ListItem)(({ theme, delay }) => ({
    opacity: 0,
    transform: 'translateY(-20px)',
    animation: `${menuItemEnter} 300ms ${delay}ms forwards`,
    color: '#3F71A8',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
}));

const MobileMenuItem = ({ text, onClick, delay }) => {
    return (
        <StyledListItem button onClick={onClick} delay={delay}>
            <ListItemText primary={text} />
        </StyledListItem>
    );
};

export default MobileMenuItem;
