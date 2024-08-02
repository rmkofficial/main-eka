import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import Logo from '../Logo';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const LinkContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
    position: 'relative',
    '&:hover': {
        color: '#3F71A8',
        background: 'none',
    },
    '&:hover::after': {
        width: '100%',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '0',
        height: '2px',
        bottom: '-1px',
        left: '0',
        backgroundColor: '#3F71A8',
        transition: 'width 0.3s',
    },
}));

const NavLinks = () => {
    return (
        <LinkContainer>
            <Link href="/" passHref>
                <StyledButton color="inherit">Ana Sayfa</StyledButton>
            </Link>
            <StyledButton color="inherit">Hizmetler</StyledButton>
            <Logo />
            <ScrollLink to="about-section" smooth={true} duration={500}>
                <StyledButton color="inherit">Hakkımızda</StyledButton>
            </ScrollLink>
            <ScrollLink to="contact-section" smooth={true} duration={500}>
                <StyledButton color="inherit">İletişim</StyledButton>
            </ScrollLink>
        </LinkContainer>
    );
};

export default NavLinks;
