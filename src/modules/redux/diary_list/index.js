const SET_DIARY_BOOK_LIST = "diary_list/SET_DIARY_BOOK_LIST";

export const CREATE_NEW_DIARY_BOOK_SAGA = "diary_list/CREATE_NEW_DIARY_BOOK_SAGA";
export const JOIN_DIARY_BOOK_BY_CODE_SAGA = "diary_list/JOIN_DIARY_BOOK_BY_CODE_SAGA";
export const GET_DIARY_BOOK_LIST_SAGA = "diary_list/GET_DIARY_BOOK_LIST_SAGA";

export const setDiaryBookList = (payload) => ({
	type: SET_DIARY_BOOK_LIST,
	payload,
});

export const createNewDiaryBookSaga = (payload) => ({
	type: CREATE_NEW_DIARY_BOOK_SAGA,
	payload,
});
export const joinDiaryBookByCodeSaga = (payload) => ({
	type: JOIN_DIARY_BOOK_BY_CODE_SAGA,
	payload,
});
export const getDiaryBookListSaga = () => ({
	type: GET_DIARY_BOOK_LIST_SAGA,
});

const initialState = {
	diaryList: [],
};

const diaryListReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DIARY_BOOK_LIST: {
			return {
				...state,
				diaryList: action.payload,
			};
		}
		default: {
			return {
				state,
			};
		}
	}
};

export default diaryListReducer;
