import React, { useState, useCallback } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { setRegisterForm, submitRegisterForm } from "../../../../modules/redux/register";
import ModalForm from "../ModalForm";

const RegisterModalForm = () => {
	const [localRegisterForm, setLocalRegisterForm] = useState({
		id: "",
		name: "",
		password: "",
	});

	const dispatch = useDispatch();

	const onChangeForm = useCallback(
		(e) => {
			setLocalRegisterForm({
				...localRegisterForm,
				[e.target.name]: e.target.value,
			});
		},
		[localRegisterForm],
	);

	const onClickSubmitBtn = useCallback(() => {
		dispatch(setRegisterForm(localRegisterForm));
		dispatch(submitRegisterForm(true));
	}, [dispatch]);

	return (
		<ModalForm>
			<S.BodyWrapper>
				<S.FormInputWrapper>
					<S.FormInputDiv>
						<S.FormButtonInput name="id" placeholder="아이디" autoComplete="off" onChange={onChangeForm} />
						<S.FormButton>중복확인</S.FormButton>
					</S.FormInputDiv>
					<S.FormErrorText>이미 존재하는 아이디입니다.</S.FormErrorText>
				</S.FormInputWrapper>
				<S.FormInputWrapper>
					<S.FormInputDiv>
						<S.FormButtonInput name="name" placeholder="별명" autoComplete="off" onChange={onChangeForm} />
						<S.FormButton>중복확인</S.FormButton>
					</S.FormInputDiv>
					<S.FormErrorText>이미 존재하는 별명입니다.</S.FormErrorText>
				</S.FormInputWrapper>
				<S.FormInput name="password" type="password" placeholder="비밀번호" onChange={onChangeForm} />
				<S.FormInput type="password" placeholder="비밀번호 재확인" />
				<S.FormErrorText>비밀번호가 일치하지 않습니다.</S.FormErrorText>
				<S.FormSubmitButton onClick={onClickSubmitBtn}>가입하기</S.FormSubmitButton>
			</S.BodyWrapper>
		</ModalForm>
	);
};

export default RegisterModalForm;
