const SET_REGISTER_FORM = "regsiter/SET_REGISTER_FORM";
const SUBMIT_REGISTER_FORM = "register/SUBMIT_REGISTER_FORM";

export const setRegisterForm = (payload) => ({
	type: SET_REGISTER_FORM,
	payload,
});
export const submitRegisterForm = (payload) => ({
	type: SUBMIT_REGISTER_FORM,
	payload,
});

const initialState = {
	id: "",
	name: "",
	password: "",
	submit: false,
};

const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_REGISTER_FORM: {
			return {
				...state,
				id: action.payload.id,
				name: action.payload.name,
				password: action.payload.password,
			};
		}
		case SUBMIT_REGISTER_FORM: {
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

export default registerReducer;
