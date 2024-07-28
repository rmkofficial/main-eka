import { keyframes, styled } from '@mui/system';
import { Box, Container, Typography, Button } from '@mui/material';


export const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;


export const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

export const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'left',
    color: '#fff',
    overflow: 'hidden',
    paddingLeft: theme.spacing(4),
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1))',
        zIndex: 1,
    },
}));

export const HeroContentWrapper = styled(Container)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: 'none',
}));

export const HeroTitle = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'topSpacing' && prop !== 'leftSpacing',
})(({ theme, topSpacing, leftSpacing }) => ({
    marginBottom: theme.spacing(2),
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    animation: `${typing} 4s steps(30, end) forwards`,
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
    },
    marginTop: topSpacing,
    marginLeft: leftSpacing,
}));

export const HeroButton = styled(Button)(({ theme }) => ({
    opacity: 0,
    animation: `${fadeIn} 2s ease-in-out forwards`,
    animationDelay: '2s',
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
        padding: theme.spacing(1, 2),
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
        padding: theme.spacing(1.5, 4),
    },
    marginTop: theme.spacing(2),
}));
