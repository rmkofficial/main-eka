import * as React from 'react';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../styles/globals.css';
import Loader from '../components/Loader/Loader';

const theme = createTheme();

export default function MyApp(props) {
    const { Component, pageProps } = props;
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Eğitim Kariyer Akademisi</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="icon" href="/favicon.png" type="image/png" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {loading ? <Loader /> : <Component {...pageProps} />}
            </ThemeProvider>
        </React.Fragment>
    );
}
