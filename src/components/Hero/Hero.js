import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const HeroSection = styled('div')(({ theme }) => ({
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(8, 0),
    textAlign: 'center',
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
    },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
}));

const HeroButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
        padding: theme.spacing(1, 2),
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
        padding: theme.spacing(1.5, 4),
    },
}));

const Hero = () => {
    return (
        <HeroSection>
            <Container>
                <HeroTitle variant="h2" component="h1" gutterBottom>
                    EKA Eğitim Danışmanlık
                </HeroTitle>
                <HeroSubtitle variant="h5" component="h2" gutterBottom>
                    Eğitimde Mükemmellik İçin Yanınızdayız
                </HeroSubtitle>
                <HeroButton variant="contained" color="primary">
                    Daha Fazla Bilgi
                </HeroButton>
            </Container>
        </HeroSection>
    );
};

export default Hero;
