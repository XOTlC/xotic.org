import { storage } from '@helpers/storage';

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark'
}

export const getTheme = () => {
	const theme = storage.get('theme');

	if (
		theme !== Theme.LIGHT
		&&
		theme !== Theme.DARK
	) {
		storage.set('theme', Theme.LIGHT);

		return Theme.LIGHT;
	}

	return theme;
};
