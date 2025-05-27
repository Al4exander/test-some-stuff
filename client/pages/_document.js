import Document, {
    Html, Head, Main, NextScript,
} from 'next/document';

class CustomDocument extends Document {
    static getInitialProps(context) {
        const originalRenderPage = context.renderPage;

        context.renderPage = () => originalRenderPage({
            enhanceApp:       (App) => App,
            enhanceComponent: (Component) => Component,
        });

        return Document.getInitialProps(context);
    }

    render() {
        return (
            <Html lang = 'en'>
                <Head>
                    <link
                        href = 'https://fonts.googleapis.com/css2?family=Roboto'
                        rel = 'stylesheet' />
                </Head>
                <body className = 'theme'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
