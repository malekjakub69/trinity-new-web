import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export default i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'cs',
        debug: true,
        interpolation: {
            escapeValue: false
        }
    });
