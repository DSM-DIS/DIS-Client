const SHOW_MODAL = "modal/SHOW_MODAL";
const DROP_MODAL = "modal/DROP_MODAL";

export const showModal = (payload) => ({
	type: SHOW_MODAL,
	payload,
});
export const dropModal = () => ({
	type: DROP_MODAL,
});

const initialState = {
	isShow: true,
	modalElement: null,
};

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MODAL: {
			return {
				...state,
				isShow: true,
				modalElement: action.payload,
			};
		}
		case DROP_MODAL: {
			return {
				...state,
				isShow: false,
				modalElement: null,
			};
		}
		default: {
			return state;
		}
	}
};

export default modalReducer;
