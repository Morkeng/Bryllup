import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        no: {
            translation: {
                home_txt1: "Velkommen til vår bryllupsnettside!",
                rsvp: "Påmelding",
                countdownTitle: "Vi gifter oss om",
                weddingDay: "💍 Bryllupsdagen er her! 💐"
            }
        },
        en: {
            translation: {
                home_txt1: "Welcome to our wedding website!",
                rsvp: "RSVP",
                countdownTitle: "We are getting married in",
                weddingDay: "💍 The wedding day is here! 💐"
            }
        }
    },
    lng: 'no', // standard språk
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
