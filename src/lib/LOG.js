export const Login = (accessToken, refreshToken) => {
	try {
		window.localStorage.setItem("ACCESS_TOKEN", accessToken);
		window.localStorage.setItem("REFRESH_TOKEN", refreshToken);
	} catch (error) {
		console.log(error);
	} finally {
		alert("로그인에 성공하셨습니다.");
		window.location.href = "/main";
	}
};

export const Logout = () => {
	try {
		!!window.localStorage.getItem(ACCESS_TOKEN) && window.localStorage.removeItem(ACCESS_TOKEN);
		!!window.localStorage.getItem(REFRESH_TOKEN) && window.localStorage.removeItem(REFRESH_TOKEN);
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
