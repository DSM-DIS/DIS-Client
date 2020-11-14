import React from "react";
import * as S from "./styles";
import ModalForm from "../ModalForm";

const RegisterModalForm = () => {
	return (
		<ModalForm>
			<S.BodyWrapper>
				<S.FormInputWrapper>
					<S.FormButtonInput name="id" placeholder="아이디" autoComplete="off" />
					<S.FormButton>중복확인</S.FormButton>
				</S.FormInputWrapper>
				<S.FormInputWrapper>
					<S.FormButtonInput name="name" placeholder="별명" autoComplete="off" />
					<S.FormButton>중복확인</S.FormButton>
				</S.FormInputWrapper>
				<S.FormInput name="password" type="password" placeholder="비밀번호" />
				<S.FormInput type="password" placeholder="비밀번호 재확인" />
				<S.FormSubmitButton>가입하기</S.FormSubmitButton>
			</S.BodyWrapper>
		</ModalForm>
	);
};

export default RegisterModalForm;
