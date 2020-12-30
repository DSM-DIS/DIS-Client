import React, { useState, useCallback } from "react";
import * as S from "./styles";
import ModalForm from "../ModalForm";

const RegisterModalForm = () => {
	const [localRegisterForm, setLocalRegisterForm] = useState({
		id: "",
		name: "",
		password: "",
	});
	const [isError, setIsError] = useState({
		id: false,
		nickname: false,
		password: true,
		passwordConfirm: false,
	});
	const [errorText, setErrorText] = useState({
		id: "",
		nickname: "",
		password: "",
		passwordConfirm: "",
	});

	const onChangeForm = useCallback(
		(e) => {
			setLocalRegisterForm({
				...localRegisterForm,
				[e.target.name]: e.target.value,
			});
		},
		[localRegisterForm],
	);

	const onClickSubmitBtn = () => {
		console.log("res");
	};

	return (
		<ModalForm>
			<S.BodyWrapper>
				<S.FormInputWrapper>
					<S.FormInputDiv>
						<S.FormButtonInput
							name="id"
							placeholder="아이디"
							autoComplete="off"
							onChange={onChangeForm}
							isError={isError.id}
						/>
						<S.FormButton>중복확인</S.FormButton>
					</S.FormInputDiv>
					<S.FormErrorText isError={isError.id}>{errorText.id}</S.FormErrorText>
				</S.FormInputWrapper>
				<S.FormInputWrapper>
					<S.FormInputDiv>
						<S.FormButtonInput
							name="name"
							placeholder="별명"
							autoComplete="off"
							onChange={onChangeForm}
							isError={isError.nickname}
						/>
						<S.FormButton>중복확인</S.FormButton>
					</S.FormInputDiv>
					<S.FormErrorText isError={isError.nickname}>{errorText.nickname}</S.FormErrorText>
				</S.FormInputWrapper>
				<S.FormInput
					name="password"
					type="password"
					placeholder="비밀번호"
					onChange={onChangeForm}
					isError={isError.password}
				/>
				<S.FormErrorText isError={isError.password}>{errorText.password}</S.FormErrorText>
				<S.FormInput type="password" placeholder="비밀번호 재확인" isError={isError.passwordConfirm} />
				<S.FormErrorText isError={isError.passwordConfirm}>{errorText.passwordConfirm}</S.FormErrorText>
				<S.FormSubmitButton onClick={onClickSubmitBtn}>가입하기</S.FormSubmitButton>
			</S.BodyWrapper>
		</ModalForm>
	);
};

export default RegisterModalForm;
