// components/Contact/Contact.js

import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import DesktopContact from './Desktop/DesktopContact';
import MobileContact from './Mobile/MobileContact';

const Contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return isMobile ? <MobileContact /> : <DesktopContact />;
};

export default Contact;
