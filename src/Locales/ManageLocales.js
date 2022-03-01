import { Platform, NativeModules } from 'react-native'
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './en-us' // importa o objeto de traduções para o idioma inglês
import pt from './pt-BR' // importa o objeto de traduções para o idioma português

const normalizeTranslate = {
    'en_US': 'en_US',
    'pt_BR': 'pt_BR',
    'en': 'en_US',
    'pt_US': 'pt_BR',
    'pt-BR': 'pt_BR',
    'en-US': 'en_US',
    'mock': 'pt_BR',
}

// Aqui setamos os idiomas que o I18N irá dar suporte
i18n.translations = {
    'en_US': en,
    'pt_BR': pt,
}

console.log("Localization.decimalSeparator " + Localization.decimalSeparator);
console.log("Localization.digitGroupingSeparator " + Localization.digitGroupingSeparator);
console.log("IsMetric " + Localization.isMetric);
console.log("TimeZone " + Localization.timezone);

const setLanguageToI18n = () => {
    const language = Localization.locale
    const translateNormalize = normalizeTranslate[language]
    const iHaveThisLanguage = i18n.translations.hasOwnProperty(translateNormalize)
    iHaveThisLanguage
        ? i18n.locale = translateNormalize
        : i18n.defaultLocale = 'en_US'
}

setLanguageToI18n()

export const translate = key => i18n.t(key)