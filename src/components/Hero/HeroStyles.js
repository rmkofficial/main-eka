import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundColor: '#f5f5f5',
        padding: theme.spacing(8, 0),
        textAlign: 'center',
    },
    title: {
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem',
        },
    },
    subtitle: {
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
    },
    ctaButton: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8rem',
            padding: theme.spacing(1, 2),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
            padding: theme.spacing(1.5, 4),
        },
    },
}));

export default useStyles;
