export const Login = (accessToken, refreshToken) => {
	try {
		window.localStorage.setItem("accessToken", accessToken);
		window.localStorage.setItem("refreshToken", refreshToken);
	} catch (error) {
		console.log(error);
	} finally {
		alert("로그인에 성공하셨습니다.");
		window.location.href = "/main";
	}
};

export const Logout = () => {
	try {
		!!window.localStorage.getItem(accessToken) && window.localStorage.removeItem(ACCESS_TOKEN);
		!!window.localStorage.getItem(refreshToken) && window.localStorage.removeItem(REFRESH_TOKEN);
	} catch (error) {
		console.log(error);
	} finally {
		alert("로그아웃 되었습니다.");
		window.location.href = "/";
	}
};

export const Register = () => {
	alert("회원가입에 성공하셨습니다.");
	window.location.reload();
};
