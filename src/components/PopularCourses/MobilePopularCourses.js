import React, { useState } from 'react';
import Slider from 'react-slick';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CoursesSectionWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  padding: theme.spacing(8, 0),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#fff',
  overflow: 'hidden',
  backgroundColor: '#343942',
  backgroundImage: 'url(https://www.transparenttextures.com/patterns/football-no-lines.png)',
}));

const CoursesContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 'none',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontSize: '2rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}));

const StyledSlider = styled(Slider)(({ theme }) => ({
  width: '100%',
  '& .slick-slide': {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
    transition: 'transform 0.5s ease-in-out',
    transform: 'perspective(1000px)',
    opacity: 0.5,
  },
  '& .slick-current': {
    transform: 'perspective(1000px) rotateX(0deg)',
    opacity: 1,
  },
  '& .slick-prev, & .slick-next': {
    display: 'none !important',
  },
  '& .slick-dots': {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    display: 'flex !important',
    flexDirection: 'column',
    listStyle: 'none',
  },
  '& .slick-dots li': {
    margin: theme.spacing(1, 0),
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
  transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
  transform: isActive ? 'perspective(1000px) scale(1.1) rotateX(0deg)' : 'perspective(1000px) scale(0.8) rotateX(45deg)',
  boxShadow: isActive ? '0 20px 40px rgba(0, 0, 0, 0.5)' : 'none',
  cursor: 'pointer',
  zIndex: isActive ? 1 : 0,
  '&:hover': {
    transform: 'perspective(1000px) scale(1.05) rotateX(0deg)',
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
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const MobilePopularCourses = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };



  const coursesData = [
    {
      title: 'Zaman Yönetimi',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?fit=crop&w=800&q=80',
    },
    {
      title: 'Moda Tasarımı',
      image: 'https://images.unsplash.com/photo-1520004434532-668416a08753?fit=crop&w=800&q=80',
    },
    {
      title: 'İngilizce',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fit=crop&w=800&q=80',
    },
    {
      title: 'İnsan Kaynakları Yönetimi',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?fit=crop&w=800&q=80',
    },
    {
      title: 'Siber Güvenlik',
      image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?fit=crop&w=800&q=80',
    },
  ];

  return (
    <CoursesSectionWrapper>
      <CoursesContent>
        <SectionTitle variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#fff' }}>
          Popüler Eğitimler
        </SectionTitle>
        <StyledSlider {...settings}>
          {coursesData.map((course, index) => (
            <StyledCard key={index} isActive={index === currentSlide}>
              <StyledCardMedia
                image={course.image}
                title={course.title}
              />
              <StyledCardContent>
                <Typography variant="h5" component="div">
                  {course.title}
                </Typography>
              </StyledCardContent>
            </StyledCard>
          ))}
        </StyledSlider>
      </CoursesContent>
    </CoursesSectionWrapper>
  );
};

export default MobilePopularCourses;
