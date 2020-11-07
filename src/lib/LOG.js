export const Logout = () => {
	try {
		!!window.localStorage.getItem(ACCESS_TOKEN) && window.localStorage.removeItem(ACCESS_TOKEN);
		!!window.localStorage.getItem(REFRESH_TOKEN) && window.localStorage.removeItem(REFRESH_TOKEN);
	} catch (error) {
		console.log(error);
	} finally {
		window.location.href("/");
	}
};