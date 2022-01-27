import Document, {
    Html, Head, Main, NextScript,
} from 'next/document';

class CustomDocument extends Document {
    static getInitialProps(context) {
        const originalRenderPage = context.renderPage;

        context.renderPage = () => originalRenderPage({
            /**
             * В данной секции можно обернуть всё дерево приложения
             * */
            enhanceApp:       (App) => App,
            /**
             * В данной секции можно обернуть покомпонентно
             * */
            enhanceComponent: (Component) => Component,
        });

        /**
         * Запуск getInitialProps родителя теперь включает кастомную функцию renderPage
         * */
        return Document.getInitialProps(context);
    }

    render() {
        return (
            <Html lang = 'en'>
                <Head>
                    <link
                        href = 'https://fonts.googleapis.com/css2?family=Roboto'
                        rel = 'stylesheet' />
                    <title>Testing some stuff</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
