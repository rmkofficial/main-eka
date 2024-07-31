import { styled } from '@mui/system';
import { CardMedia } from '@mui/material';

const ModalImage = styled(CardMedia)(({ theme }) => ({
    width: '100%',
    height: '300px',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
}));

export default ModalImage;
