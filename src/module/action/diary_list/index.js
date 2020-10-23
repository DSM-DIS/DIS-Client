export const SET_DIARY_BOOK_LIST = 'diary_list/SET_DIARY_BOOK_LIST';

export const GET_DIARY_BOOK_LIST_SAGA = 'diary_list/GET_DIARY_BOOK_LIST_SAGA';

export const setDiaryBookList = (payload) => ({
	type: SET_DIARY_BOOK_LIST,
	payload,
});
