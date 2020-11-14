import React, { useCallback, useState } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { setLoginForm, submitLoginForm } from "../../../../modules/redux/login";
import { showModal } from "../../../../modules/redux/modal";
import RegisterModal from "../../../modal/Modal/RegisterModal/RegisterModal";

const RegisterBox = () => {
	// 컴포넌트 내부 loginForm과 redux loginForm이 존재
	const [localLoginForm, setLocalLoginForm] = useState({
		id: "",
		password: "",
	});

	const dispatch = useDispatch();
	const modalOn = useCallback((Modal) => dispatch(showModal(Modal)), [dispatch]);

	const onChangeForm = useCallback(
		(e) => {
			setLocalLoginForm({
				...localLoginForm,
				[e.target.name]: e.target.value,
			});
		},
		[localLoginForm],
	);

	const onClickSubmitBtn = useCallback(() => {
		dispatch(setLoginForm(localLoginForm));
		dispatch(submitLoginForm(true));
	}, [dispatch]);

	return (
		<S.MainWrapper>
			<S.LoginWrapper>
				<S.LoginLabel>ID</S.LoginLabel>
				<S.LoginInput type="text" name="id" autoComplete="off" onChange={onChangeForm} />
				<S.LoginLabel>password</S.LoginLabel>
				<S.LoginInput type="password" name="password" onChange={onChangeForm} />
				<S.LoginButton onClick={onClickSubmitBtn}>sign in</S.LoginButton>
			</S.LoginWrapper>
			<S.RegisterButton onClick={() => modalOn(RegisterModal)}>sign up</S.RegisterButton>
		</S.MainWrapper>
	);
};

export default RegisterBox;
