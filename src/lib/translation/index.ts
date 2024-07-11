import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
	translations: {
		en: { lang },
		fr: { lang }
	},
	loaders: [
		{
			locale: 'fr',
			key: 'home',
			loader: async () => (await import('./fr/home.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			loader: async () => (await import('./en/home.json')).default
		}
	]
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
