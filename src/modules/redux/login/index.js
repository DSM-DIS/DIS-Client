const SET_LOGIN_FORM = "login/SET_LOGIN_FORM";
const SUBMIT_LOGIN_FORM = "login/SUBMIT_LOGIN_FORM";

export const setLoginForm = (payload) => ({
	type: SET_LOGIN_FORM,
	payload,
});
export const submitLoginForm = (payload) => ({
	type: SUBMIT_LOGIN_FORM,
	payload,
});

const initialState = {
	id: "",
	password: "",
	submit: false,
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOGIN_FORM: {
			return {
				...state,
				id: action.payload.id,
				password: action.payload.password,
			};
		}
		case SUBMIT_LOGIN_FORM: {
			return {
				...state,
				submit: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};

export default loginReducer;
