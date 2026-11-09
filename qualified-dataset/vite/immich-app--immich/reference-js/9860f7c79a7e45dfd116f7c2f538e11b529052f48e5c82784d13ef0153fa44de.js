import { locale } from 'svelte-i18n-lingui';
import { messages as defaultMessages } from './locales/en';
const loaders = {
    'en-XA': () => import('./locales/en-XA'),
};
export const setYuccaLanguage = async (lang) => {
    const loader = loaders[lang];
    if (!loader) {
        locale.set('en', defaultMessages);
        return;
    }
    const { messages } = await loader();
    locale.set(lang, messages);
};
