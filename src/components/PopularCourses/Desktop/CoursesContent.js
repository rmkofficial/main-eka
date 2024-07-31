import { styled } from '@mui/system';
import { Container } from '@mui/material';

const CoursesContent = styled(Container)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 'none',
}));

export default CoursesContent;
