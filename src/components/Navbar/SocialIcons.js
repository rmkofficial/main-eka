import React from 'react';
import { IconButton, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/system';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: '#3F71A8',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    '&:hover': {
        color: '#fff',
        backgroundColor: '#3F71A8',
    },
}));

const SocialIcons = () => {
    return (
        <Box sx={{ display: 'flex', gap: '0.5rem' }}>
            <StyledIconButton>
                <InstagramIcon />
            </StyledIconButton>
            <StyledIconButton>
                <TwitterIcon />
            </StyledIconButton>
            <StyledIconButton>
                <FacebookIcon />
            </StyledIconButton>
            <StyledIconButton>
                <LinkedInIcon />
            </StyledIconButton>
        </Box>
    );
};

export default SocialIcons;
