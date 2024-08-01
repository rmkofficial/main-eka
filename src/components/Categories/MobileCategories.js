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
    backgroundColor: '#1e242e',
    backgroundImage: 'url(https://www.transparenttextures.com/patterns/football-no-lines.png)',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
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
    maxWidth: 'none',
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
        display: 'flex',
        justifyContent: 'center',
    },
    '& .slick-list': {
        padding: '0 20px',
    },
    '& .slick-dots li button:before': {
        fontSize: '12px',
        color: '#fff',
    },
    '& .slick-dots li.slick-active button:before': {
        color: '#3F71A8',
    },
}));

const StyledCard = styled(Card, {
    shouldForwardProp: (prop) => prop !== 'isActive',
})(({ theme, isActive }) => ({
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    width: '80%',
    height: '300px',
    transform: isActive ? 'scale(1.1)' : 'scale(1)',
    boxShadow: isActive ? '0 20px 40px rgba(0, 0, 0, 0.5)' : 'none',
    zIndex: isActive ? 1 : 0,
    cursor: 'pointer',
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

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    height: '100px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    color: '#fff',
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
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '50%',
}));

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <ArrowButton style={{ right: '10px' }} onClick={onClick}>
            <ArrowForwardIosIcon style={{ fontSize: '1.5rem' }} />
        </ArrowButton>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <ArrowButton style={{ left: '10px' }} onClick={onClick}>
            <ArrowBackIosIcon style={{ fontSize: '1.5rem' }} />
        </ArrowButton>
    );
};

const MobileCategories = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    const [currentSlide, setCurrentSlide] = React.useState(0);

    return (
        <CategoriesSectionWrapper>
            <CategoriesContent>
                <CategoryTitle variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#fff' }}>
                    Kategoriler
                </CategoryTitle>
                <StyledSlider {...settings}>
                    {data.map((categoryData, index) => (
                        <StyledCard key={index} isActive={index === currentSlide}>
                            <StyledCardMedia
                                image={categoryData.image}
                                title={categoryData.category}
                            />
                            <StyledCardContent>
                                <Typography variant="h5" component="div">
                                    {categoryData.category}
                                </Typography>
                            </StyledCardContent>
                        </StyledCard>
                    ))}
                </StyledSlider>
            </CategoriesContent>
        </CategoriesSectionWrapper>
    );
};

export default MobileCategories;
