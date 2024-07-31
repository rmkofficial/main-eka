import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    fontSize: '2rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
}));

export default SectionTitle;
