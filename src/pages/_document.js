import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="tr">
                <Head>
                    <meta name="description" content="Eğitim Kariyer Akademisi - Geleceğinizi İnşa Edin." />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
