import { styled } from '@mui/system';
import { Box } from '@mui/material';

const ModalContent = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 800,
    backgroundColor: 'transparent',
    outline: 'none',
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
}));

export default ModalContent;
