export const SET_DIARY_ID = "diary_info/SET_DIARY_ID";
export const SET_DIARY_NAME = "diary_info/SET_DIARY_NAME";
export const SET_DIARY_CODE = "diary_info/SET_DIARY_CODE";
export const SET_DIARY_OWNER = "diary_info/SET_DIARY_OWNER";
export const SET_DIARY_ALL = "diary_info/SET_DIARY_ALL";

export const setDiaryId = (payload) => ({
	type: SET_DIARY_ID,
	payload,
});
export const setDiaryName = (payload) => ({
	type: SET_DIARY_NAME,
	payload,
});
export const setDiaryCode = (payload) => ({
	type: SET_DIARY_CODE,
	payload,
});
export const setDiaryOwner = (payload) => ({
	type: SET_DIARY_OWNER,
	payload,
});
export const setDiaryAll = (payload) => ({
	type: SET_DIARY_ALL,
	payload,
});

const initialState = {
	id: "",
	name: "",
	code: "",
	owner: "",
};

const diaryInfoReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DIARY_ID: {
			return {
				...state,
				id: action.payload.id,
			};
		}
		case SET_DIARY_NAME: {
			return {
				...state,
				name: action.payload.name,
			};
		}
		case SET_DIARY_CODE: {
			return {
				...state,
				code: action.payload.code,
			};
		}
		case SET_DIARY_OWNER: {
			return {
				...state,
				owner: action.payload.owner,
			};
		}
		case SET_DIARY_ALL: {
			return {
				...state,
				id: action.payload.id,
				name: action.payload.name,
				code: action.payload.code,
				owner: action.payload.owner,
			};
		}
		default:
			return {
				...state,
			};
	}
};

export default diaryInfoReducer;
