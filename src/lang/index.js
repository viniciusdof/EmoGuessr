import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './TranslationsEN';
import br from './TranslationsBR';


Vue.use(VueI18n);

const translations = Object.assign(br,en);

export const languages = [
    {
        text: 'English',
        value: 'en',
    },
        {
        text: 'Português(Brasil)',
        value: 'br',
    }
];

export function checkLanguage(language) {
    return navigator.language.split('-')[0] == language;
}

export default new VueI18n({
    locale:
        localStorage.getItem('language') != null
            ? localStorage.getItem('language')
            : languages.some(checkLanguage)
            ? navigator.language.split('-')[0]
            : 'br',
    fallbackLocale: 'br',
    messages: translations,
});
