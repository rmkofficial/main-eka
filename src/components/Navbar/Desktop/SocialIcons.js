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

const SocialIcons = () => {
    return (
        <Box sx={{ display: 'flex', gap: '0.5rem' }}>
            <StyledIconButton aria-label="Instagram">
                <InstagramIcon />
            </StyledIconButton>
            <StyledIconButton aria-label="Twitter">
                <TwitterIcon />
            </StyledIconButton>
            <StyledIconButton aria-label="Facebook">
                <FacebookIcon />
            </StyledIconButton>
            <StyledIconButton aria-label="LinkedIn">
                <LinkedInIcon />
            </StyledIconButton>
        </Box>
    );
};

export default SocialIcons;
