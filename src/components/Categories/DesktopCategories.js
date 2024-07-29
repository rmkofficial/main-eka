import React from 'react';
import Slider from 'react-slick';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import data from '../../data/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    backgroundColor: '#385c99',
    backgroundImage: 'url(http://www.transparenttextures.com/patterns/football-no-lines.png)',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Karartma
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

const StyledSlider = styled(Slider)(({ theme }) => ({
    width: '100%',
    '& .slick-slide': {
        padding: theme.spacing(2),
    },
    '& .slick-list': {
        padding: '0 40px',
    },
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

const ArrowButton = styled(Box)(({ theme }) => ({
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    width: '80px',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
}));

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <ArrowButton style={{ right: '-90px' }} onClick={onClick}>
            <ArrowForwardIosIcon style={{ fontSize: '3rem' }} />
        </ArrowButton>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <ArrowButton style={{ left: '-90px' }} onClick={onClick}>
            <ArrowBackIosIcon style={{ fontSize: '3rem' }} />
        </ArrowButton>
    );
};

const DesktopCategories = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <CategoriesSectionWrapper>
            <CategoriesContent>
                <CategoryTitle variant="h2" component="h2">
                    Kategoriler
                </CategoryTitle>
                <StyledSlider {...settings}>
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
                </StyledSlider>
            </CategoriesContent>
        </CategoriesSectionWrapper>
    );
};

export default DesktopCategories;
