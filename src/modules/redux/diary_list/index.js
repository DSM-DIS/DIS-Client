const SET_DIARY_BOOK_LIST = "diary_list/SET_DIARY_BOOK_LIST";

export const GET_DIARY_BOOK_LIST_SAGA = "diary_list/GET_DIARY_BOOK_LIST_SAGA";

export const setDiaryBookList = (payload) => ({
	type: SET_DIARY_BOOK_LIST,
	payload,
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