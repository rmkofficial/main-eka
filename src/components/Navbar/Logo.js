import React from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { Box } from '@mui/material';

const Logo = () => {
    return (
        <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', margin: '0 2rem' }}>
            <Image src={logo} alt="Logo" width={80} height={80} priority />
        </Box>
    );
};

export default Logo;
