import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import data from '../../data/data';

const CategoriesSectionWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    padding: theme.spacing(8, 0),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    overflow: 'hidden',
    backgroundColor: '#fff',
    backgroundImage: 'url(http://www.transparenttextures.com/patterns/football-no-lines.png)',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Karartma
        zIndex: 1,
    },
}));

const CategoriesContent = styled(Container)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 'none', // Tüm genişliği kapsaması için
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    fontSize: '2rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
}));

const CardWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
}));

const StyledCard = styled(Card)(({ theme }) => ({
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        '& .MuiCardMedia-root': {
            filter: 'brightness(0.5)',
        },
    },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    height: '200px',
    transition: 'filter 0.3s ease-in-out',
}));

const MobileCategories = () => {
    return (
        <CategoriesSectionWrapper>
            <CategoriesContent>
                <CategoryTitle variant="h2" component="h2">
                    Kategoriler
                </CategoryTitle>
                <CardWrapper>
                    {data.map((categoryData, index) => (
                        <StyledCard key={index}>
                            <StyledCardMedia
                                image={categoryData.image}
                                title={categoryData.category}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {categoryData.category}
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    ))}
                </CardWrapper>
            </CategoriesContent>
        </CategoriesSectionWrapper>
    );
};

export default MobileCategories;
