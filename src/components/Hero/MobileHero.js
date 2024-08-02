import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import Image from 'next/image';
import heroImage from '../../../public/hero1.jpg';

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const buttonFadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'left',
    color: '#fff',
    overflow: 'hidden',
    paddingLeft: theme.spacing(2), 
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1))',
        zIndex: 1,
    },
}));

const HeroContentWrapper = styled(Container)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: 'none', 
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    animation: `${typing} 1.5s steps(30, end) forwards`,
    fontSize: '2rem',
    textAlign: 'left',
    display: 'inline-block',
    width: 'fit-content',
}));

const HeroButton = styled(Button)(({ theme }) => ({
    opacity: 0,
    animation: `${buttonFadeIn} 2s ease-in-out forwards`,
    animationDelay: '0.5s',
    fontSize: '0.8rem',
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(2),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
}));

const MobileHero = () => {
    return (
        <HeroSection id='hero'>
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <Image
                    src={heroImage}
                    alt="Hero Image"
                    fill
                    quality={100}
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </Box>
            <HeroContentWrapper>
                <HeroTitle variant="h2" component="h1" gutterBottom>
                    Geleceğinizi İnşa Edin
                </HeroTitle>
                <HeroButton variant="contained">
                    Daha Fazla Bilgi
                </HeroButton>
            </HeroContentWrapper>
        </HeroSection>
    );
};

export default MobileHero;
