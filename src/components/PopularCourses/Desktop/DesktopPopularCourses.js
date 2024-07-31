import React, { useState } from 'react';
import { Typography, Modal, Backdrop } from '@mui/material';
import {
    CoursesSectionWrapper,
    CoursesContent,
    SectionTitle,
    StyledSlider,
    StyledCard,
    CardOverlay,
    ModalContent,
    ModalImage,
    ModalTextContainer
} from './components';

const coursesData = [
    { title: 'Zaman Yönetimi', image: 'https://picsum.photos/800/600?random=1', description: 'Etkili zaman yönetimi teknikleri.' },
    { title: 'Moda Tasarımı', image: 'https://picsum.photos/800/600?random=2', description: 'Moda tasarımı prensipleri ve teknikleri.' },
    { title: 'İngilizce', image: 'https://picsum.photos/800/600?random=3', description: 'Başlangıçtan ileri seviyeye İngilizce eğitimi.' },
    { title: 'İnsan Kaynakları Yönetimi', image: 'https://picsum.photos/800/600?random=4', description: 'İK yönetimi ve stratejileri.' },
    { title: 'Siber Güvenlik', image: 'https://picsum.photos/800/600?random=5', description: 'Siber güvenlik temelleri ve ileri seviye teknikler.' },
];

const DesktopPopularCourses = () => {
    const [open, setOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleCardClick = (course, index) => {
        setSelectedCourse(course);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20%',
    };

    return (
        <CoursesSectionWrapper>
            <CoursesContent>
                <SectionTitle variant="h2" component="h2">
                    Popüler Eğitimler
                </SectionTitle>
                <StyledSlider {...settings}>
                    {coursesData.map((course, index) => (
                        <StyledCard key={index} onClick={() => handleCardClick(course, index)}>
                            <CardOverlay image={course.image} title={course.title} />
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
                    <ModalImage component="img" image={selectedCourse?.image} title={selectedCourse?.title} />
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

export default DesktopPopularCourses;
