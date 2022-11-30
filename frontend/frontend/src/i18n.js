import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
             translations: {
            'Sing Up': 'Sing Up', 
            'Password mismatch': 'Password mismatch',
            Username: 'Username',
            'DisplayName': 'DisplayName',
            Password: 'Password',
            'Password Repeat': 'Password Repeat',
            Login: 'Login'
             }
        },
        tr: {
            translations: {
            'Sing Up': 'Kayıt Ol',
            'Password mismatch': 'Lütfen şifreyi aynı şekilde giriniz!',
            "Username": "Kullanıcı adı",
            'DisplayName': 'Tercih edilen isim',
            'Password': 'Parola',
            'Password Repeat': 'Parola tekrarı',
            Login: 'Giriş'

            }
        }
    },
    fallbackLng: 'en',
    ns: ['translations'] ,
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        ascapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }
});

export default i18n;