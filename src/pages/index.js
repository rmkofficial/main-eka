import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Container, Typography } from '@mui/material';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Container maxWidth="lg">
                <Typography variant="h1" component="h2" gutterBottom>
                    EKA
                </Typography>
                <Typography variant="body1">
                    Hoş geldiniz!
                </Typography>
            </Container>
        </div>
    );
};

export default Home;
