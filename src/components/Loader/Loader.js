import React from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const grow = keyframes`
  0% { transform: scale(0.5); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`;

const LoaderWrapper = styled(Box)({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#110e0c', 
    zIndex: 9999, 
});

const LogoAnimation = styled(Box)(({ theme }) => ({
    animation: `${grow} 2s ease-in-out infinite`,
}));

const Loader = () => {
    return (
        <LoaderWrapper>
            <LogoAnimation>
                <Image src={logo} alt="EKA Logo" width={150} height={150} priority />
            </LogoAnimation>
        </LoaderWrapper>
    );
};

export default Loader;
