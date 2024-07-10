import { loadTranslations } from '$lib/translation';

export const load = async () => {
	const initialLocale = 'en';

	await loadTranslations(initialLocale);

	return {};
};
