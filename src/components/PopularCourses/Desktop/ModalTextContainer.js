import { styled } from '@mui/system';
import { Box } from '@mui/material';

const ModalTextContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    color: '#fff',
    textAlign: 'center',
}));

export default ModalTextContainer;
