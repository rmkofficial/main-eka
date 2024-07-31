import { styled } from '@mui/system';
import { Box } from '@mui/material';

const CardOverlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    color: '#fff',
    fontSize: '1.5rem',
}));

export default CardOverlay;
