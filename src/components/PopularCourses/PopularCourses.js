import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

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

const PopularCourses = () => {
    return (
        <CoursesSectionWrapper>
            <CoursesContent>
                <SectionTitle variant="h2" component="h2">
                    Popüler Eğitimler
                </SectionTitle>
                {/* Diğer içerikler buraya gelecek */}
            </CoursesContent>
        </CoursesSectionWrapper>
    );
};

export default PopularCourses;
