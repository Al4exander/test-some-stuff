import { appWithTranslation } from 'next-i18next';

import { RootStoreProvider } from '../init/providers/RootStoreProvider';
import nextI18NextConfig from '../next-i18next.config';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
    return (
        <RootStoreProvider hydrationData = { pageProps.hydrationData }>
            <Component { ...pageProps } />
        </RootStoreProvider>
    );
};

export default appWithTranslation(MyApp, nextI18NextConfig);
