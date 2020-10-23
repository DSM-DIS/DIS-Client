import axios from 'axios';

const BASE_URL = 'https://DIaryStory.com';

const ACCESS_TOKEN_NAME = 'Authorization';
const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

export const methodType = {
	GET: 'get',
	POST: 'post',
	PUT: 'put',
	PATCH: 'patch',
};

export const requestApiWithBodyWithoutToken = async (
	method,
	url,
	body,
	header,
) => {
	try {
		const res = await axios[method](BASE_URL + url, body, {
			...header,
		});
	} catch (error) {
		console.log(error);
	}
};

export const requestApiWithoutBodyWithoutToken = async (
	method,
	url,
	header,
) => {
	try {
		const res = await axios[method](BASE_URL + url, {
			...header,
		});

		return res;
	} catch (error) {
		console.log(error);
	}
};

export const requestApiWithoutBodyWithToken = async (method, url, header) => {
	try {
		const accessToken = window.localStorage.getItem(ACCESS_TOKEN);

		const res = await axios[method](BASE_URL + url, {
			[ACCESS_TOKEN_NAME]: accessToken,
			...header,
		});

		return res;
	} catch (error) {
		console.log(error);
	}
};

export const requestApiWithBodyWithToken = async (
	method,
	url,
	body,
	header,
) => {
	try {
		const accessToken = window.localStorage.getItem(ACCESS_TOKEN);

		const res = await axios[method](BASE_URL + url, body, {
			[ACCESS_TOKEN_NAME]: accessToken,
			...header,
		});

		return res;
	} catch (error) {
		console.log(error);
	}
};

export const Logout = () => {
	try {
		!!window.localStorage.getItem(ACCESS_TOKEN) &&
			window.localStorage.removeItem(ACCESS_TOKEN);
		!!window.localStorage.getItem(REFRESH_TOKEN) &&
			window.localStorage.removeItem(REFRESH_TOKEN);
	} catch (error) {
		console.log(error);
	} finally {
		window.location.href('/');
	}
};
