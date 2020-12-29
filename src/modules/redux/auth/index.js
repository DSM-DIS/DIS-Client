export const GET_AUTH_INFO_SAGA = "auth/GET_AUTH_INFO_SAGA";

export const getAuthInfoSaga = (payload) => ({
	type: GET_AUTH_INFO_SAGA,
	payload,
});
