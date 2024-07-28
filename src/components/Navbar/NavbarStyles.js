import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: '#1976d2',
    },
    title: {
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '24px',
        },
    },
}));

export default useStyles;
