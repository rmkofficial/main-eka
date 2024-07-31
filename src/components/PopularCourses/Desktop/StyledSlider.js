import { styled } from '@mui/system';
import Slider from 'react-slick';

const StyledSlider = styled(Slider)(({ theme }) => ({
    width: '100%',
    '& .slick-slide': {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        transform: 'scale(1)',
        transition: 'transform 0.5s ease-in-out',
        zIndex: 1,
    },
    '& .slick-slide.slick-current': {
        transform: 'scale(1.1)',
        zIndex: 2,
    },
    '& .slick-list': {
        padding: '0 20px',
    },
}));

export default StyledSlider;
