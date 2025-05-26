import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';

import '../styles/globals.css';
import AionMap from '../components/AionMap/AionMap';

const MyApp = () => {
    return (
        <AionMap />
    );
};

export default appWithTranslation(MyApp, nextI18NextConfig);
