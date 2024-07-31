import { styled } from '@mui/system';
import { Box } from '@mui/material';

const CoursesSectionWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    padding: theme.spacing(8, 0),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    overflow: 'hidden',
    backgroundColor: '#343942',
    backgroundImage: 'url(https://www.transparenttextures.com/patterns/football-no-lines.png)',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
}));

export default CoursesSectionWrapper;
