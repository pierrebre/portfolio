import { loadTranslations } from '$lib/translation';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

export const load = async () => {
	const initialLocale = 'en';

	await loadTranslations(initialLocale);
	injectSpeedInsights();
	return {};
};
