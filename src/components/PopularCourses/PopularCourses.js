import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DesktopPopularCourses from './DesktopPopulerCourses';
import MobilePopularCourses from './/MobilePopularCourses';

const PopularCourses = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return isMobile ? <MobilePopularCourses /> : <DesktopPopularCourses />;
};

export default PopularCourses;
