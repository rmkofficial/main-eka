import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { Container, Typography, Box, Card, CardMedia, Modal, Backdrop } from '@mui/material';
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
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        transform: 'scale(1)',
        transition: 'transform 0.5s ease-in-out',
        zIndex: 1,
    },
    '& .slick-slide.slick-current': {
        transform: 'scale(1.1)',
        zIndex: 2,
    },
    '& .slick-list': {
        padding: '0 20px',
    },
}));

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: '800px',
    height: '350px',
    transition: 'transform 0.5s ease-in-out',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    '&:hover .overlay': {
        opacity: 1,
    },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    height: '100%',
}));

const CardOverlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    color: '#fff',
    fontSize: '1.5rem',
}));

const ModalContent = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 800,
    backgroundColor: 'transparent',
    outline: 'none',
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
}));

const ModalImage = styled(CardMedia)(({ theme }) => ({
    width: '100%',
    height: '300px',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
}));

const ModalTextContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    color: '#fff',
    textAlign: 'center',
}));

const PopularCourses = () => {
    const [open, setOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const sliderRef = useRef(null);

    const handleCardClick = (course, index) => {
        if (sliderRef.current) {
            const currentIndex = sliderRef.current.innerSlider.state.currentSlide;
            if (currentIndex !== index) {
                sliderRef.current.slickGoTo(index);
            } else {
                handleOpen(course);
            }
        }
    };

    const handleOpen = (course) => {
        setSelectedCourse(course);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20%',
    };

    const coursesData = [
        { title: 'Zaman Yönetimi', image: 'https://picsum.photos/800/600?random=1', description: 'Etkili zaman yönetimi teknikleri.' },
        { title: 'Moda Tasarımı', image: 'https://picsum.photos/800/600?random=2', description: 'Moda tasarımı prensipleri ve teknikleri.' },
        { title: 'İngilizce', image: 'https://picsum.photos/800/600?random=3', description: 'Başlangıçtan ileri seviyeye İngilizce eğitimi.' },
        { title: 'İnsan Kaynakları Yönetimi', image: 'https://picsum.photos/800/600?random=4', description: 'İK yönetimi ve stratejileri.' },
        { title: 'Siber Güvenlik', image: 'https://picsum.photos/800/600?random=5', description: 'Siber güvenlik temelleri ve ileri seviye teknikler.' },
    ];

    return (
        <CoursesSectionWrapper>
            <CoursesContent>
                <SectionTitle variant="h2" component="h2">
                    Popüler Eğitimler
                </SectionTitle>
                <StyledSlider {...settings} ref={sliderRef}>
                    {coursesData.map((course, index) => (
                        <StyledCard key={index} onClick={() => handleCardClick(course, index)}>
                            <StyledCardMedia
                                image={course.image}
                                title={course.title}
                            />
                            <CardOverlay className="overlay">
                                {course.title}
                            </CardOverlay>
                        </StyledCard>
                    ))}
                </StyledSlider>
            </CoursesContent>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    style: { backdropFilter: 'blur(3px)' },
                }}
            >
                <ModalContent>
                    <ModalImage
                        component="img"
                        image={selectedCourse?.image}
                        title={selectedCourse?.title}
                    />
                    <ModalTextContainer>
                        <Typography variant="h6" component="h2">
                            {selectedCourse?.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {selectedCourse?.description}
                        </Typography>
                    </ModalTextContainer>
                </ModalContent>
            </Modal>
        </CoursesSectionWrapper>
    );
};

export default PopularCourses;
