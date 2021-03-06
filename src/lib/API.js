export const DIARY_SERVICE = {
	GET_DIARY_PAGE: (id, page) => {
		return `/diary-book/${id}/diary/${page}`;
	},
	CREATE_NEW_DIARY_PAGE: (id) => {
		return `/diary-book/${id}/diary`;
	},
	GET_DIARY_BOOK_LIST: () => {
		return `/user/diary-books`;
	},
	CREATE_NEW_DIARY_BOOK: () => {
		return `/diary-book`;
	},
	JOIN_DIARY_BOOK_BY_CODE: () => {
		return `/diary-book/participant`;
	},
};

export const AUTH = {
	GET_USER_NAME_BY_ACCESS: () => {
		return `/user/username`;
	},
	GET_INFO_BY_ACCESS: () => {
		return `/user`;
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
