import React, { useCallback, useState } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { showModal } from "../../../../modules/redux/modal";
import RegisterModal from "../../../modal/Modal/RegisterModal/RegisterModal";
import { requestApiWithBodyWithoutToken } from "../../../../lib/REQUEST_API";
import { Login } from "../../../../lib/LOG";

const RegisterBox = () => {
	// 컴포넌트 내부 loginForm과 redux loginForm이 존재
	const [localLoginForm, setLocalLoginForm] = useState({
		id: "",
		password: "",
	});
	const [isError, setIsError] = useState(false);

	const dispatch = useDispatch();
	const modalOn = useCallback((Modal) => dispatch(showModal(Modal)), [dispatch]);

	const onChangeForm = useCallback(
		(e) => {
			setLocalLoginForm({
				...localLoginForm,
				[e.target.name]: e.target.value,
			});
			console.log(localLoginForm);
		},
		[localLoginForm],
	);

	const onClickSubmitBtn = async () => {
		await requestApiWithBodyWithoutToken(
			"post",
			"/auth",
			{ id: localLoginForm.id, password: localLoginForm.password },
			{},
		).then((res) => {
			switch (res.status) {
				case 200: {
					Login(res.data.accessToken, res.data.refreshToken);
				}
				case 403: {
					setIsError(true);
				}
			}
		});
	};

	return (
		<S.MainWrapper>
			<S.LoginWrapper>
				<S.LoginLabel>ID</S.LoginLabel>
				<S.LoginInput isError={isError} type="text" name="id" autoComplete="off" onChange={onChangeForm} />
				<S.LoginLabel>password</S.LoginLabel>
				<S.LoginInput isError={isError} type="password" name="password" onChange={onChangeForm} />
				<S.LoginErrorText isError={isError}>아이디 또는 패스워드가 일치하지 않습니다.</S.LoginErrorText>
				<S.LoginButton onClick={onClickSubmitBtn}>sign in</S.LoginButton>
			</S.LoginWrapper>
			<S.RegisterButton onClick={() => modalOn(RegisterModal)}>sign up</S.RegisterButton>
		</S.MainWrapper>
	);
};

export default RegisterBox;
