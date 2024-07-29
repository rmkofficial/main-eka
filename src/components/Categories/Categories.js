import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import DesktopCategories from './DesktopCategories';
import MobileCategories from './MobileCategories';

const Categories = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {isMobile ? <MobileCategories /> : <DesktopCategories />}
        </>
    );
};

export default Categories;
