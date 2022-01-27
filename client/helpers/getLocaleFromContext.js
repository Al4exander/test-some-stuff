import { i18n } from '../next-i18next.config';

export const getLocaleFromContext = (context) => {
    const { locale = i18n.defaultLocale } = context;

    return locale;
};
