export const SET_DIARY_PAGE = "diary_write/SET_DIARY_PAGE";

export const GET_DIARY_PAGE_SAGA = "diary_write/GET_DIARY_PAGE_SAGA";
export const CREATE_NEW_DIARY_PAGE_SAGA = "diary_write/CREATE_NEW_DIARY_PAGE_SAGA";

export const setDiaryPage = (payload) => ({
	type: SET_DIARY_PAGE,
	payload,
});

const initialState = {
  page: "",
  content: "",
};

const diaryPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DIARY_PAGE: {
			return {
				...state,
        page: action.payload.page,
        content: action.payload.content,
			};
		}
		default: {
			return {
				state,
			};
		}
	}
};

export default diaryPageReducer;
