import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.png';

const Logo = () => {
    return (
        <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', margin: "0 2rem" }}>
            <Link href="/" passHref>
                <Box component="a" sx={{ display: 'flex' }}>
                    <Image src={logo} alt="Logo" width={80} height={80} priority />
                </Box>
            </Link>
        </Box>
    );
};

export default Logo;
