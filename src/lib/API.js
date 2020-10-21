export const BASE_URL = 'https://DIaryStory.com';

export const DIARY_SEVICE = {
	GET_DIARY_PAGE: (id, page) => {
		return `/diary-book/${id}/diary/${page}`;
	},
	CREATE_NEW_DIARY: (id) => {
		return `/diary-book/${id}/diary`;
	},
};

export const AUTH = {
	GET_INFO_BY_ACCESS: () => {
		return `/auth`;
	},
	LOG_IN: () => {
		return `/auth`;
	},
	GET_ACCESS_BY_REFRESH: () => {
		return `/auth`;
	},
	LOG_OUT: () => {
		return `/auth`;
	},
	SIGN_IN: () => {
		return `/user`;
	},
	DELETE_USER: () => {
		return `/user`;
	},
};
