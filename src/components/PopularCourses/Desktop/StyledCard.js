import { styled } from '@mui/system';
import { Card } from '@mui/material';

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

export default StyledCard;
