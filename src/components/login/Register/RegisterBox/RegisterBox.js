import React, { useCallback, useState } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { showModal } from "../../../../modules/redux/modal";
import RegisterModal from "../../../modal/Modal/RegisterModal/RegisterModal";
import { requestApiWithBodyWithoutToken } from "../../../../lib/REQUEST_API";

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
			console.log(localLoginForm);
		},
		[localLoginForm],
	);

	const onClickSubmitBtn = async () => {
		await requestApiWithBodyWithoutToken("post", "/auth", localLoginForm, {}).then((res) => console.log(res));
	};

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
