import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Hover sırasında arka plan
    },
}));

const MobileMenuItem = ({ text, onClick }) => {
    return (
        <StyledListItem button onClick={onClick}>
            <ListItemText primary={text} />
        </StyledListItem>
    );
};

export default MobileMenuItem;
