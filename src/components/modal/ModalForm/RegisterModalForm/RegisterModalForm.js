import React, { useState, useCallback } from "react";
import * as S from "./styles";
import ModalForm from "../ModalForm";
import { requestApiWithBodyWithoutToken } from "../../../../lib/REQUEST_API";
import { Register } from "../../../../lib/LOG";

const RegisterModalForm = () => {
	// registerForm
	const [localRegisterForm, setLocalRegisterForm] = useState({
		id: "",
		nickname: "",
		password: "",
		passwordConfirm: "",
	});
	// isError 상태에 따라 input 박스의 색이 달라지고 input 아래에 에러 메세지 출력 여부가 결정됨
	const [isError, setIsError] = useState({
		id: false,
		nickname: false,
		password: false,
		passwordConfirm: false,
	});
	// isError 상태가 true일 때 input 아래에 출력되는 에러 메세지
	const [errorText, setErrorText] = useState({
		id: "",
		nickname: "",
		password: "",
		passwordConfirm: "",
	});
	// id와 닉네임의 중복확인 체크 여부
	const [isOkay, setIsOkay] = useState({
		id: false,
		nickname: false,
	});

	// registerForm 변경
	const onChangeForm = useCallback(
		(e) => {
			setLocalRegisterForm({
				...localRegisterForm,
				[e.target.name]: e.target.value,
			});
		},
		[localRegisterForm],
	);

	// 중복 확인
	const onClickOverlap = (e) => {
		switch (e.target.name) {
			case "id": {
				// 아이디 공란인지 검사
				if (localRegisterForm.id === "") {
					setIsError({ ...isError, id: true });
					setErrorText({ ...errorText, id: "아이디를 입력해주세요" });
					break;
				}
				// 아이디 형식 검사
				const regExp = new RegExp(/^[a-zA-Z0-9]{8,12}$/g);
				if (regExp.test(localRegisterForm.id) === false) {
					setIsError({ ...isError, id: true });
					setErrorText({
						...errorText,
						id: "형식에 맞지 않습니다 ( 영어 + 숫자, 8 ~ 12 자리)",
					});
					break;
				}
				// 서버 연동
				requestApiWithBodyWithoutToken("post", "/check/id", { id: localRegisterForm.id }, {}).then((res) => {
					switch (res.data.status) {
						case "true": {
							setIsError({ ...isError, id: false });
							setIsOkay({ ...isOkay, id: true });
							alert("사용 가능한 아이디입니다.");
							break;
						}
						case "false": {
							setIsError({ ...isError, id: true });
							setErrorText({ ...errorText, id: "이미 존재하는 아이디입니다." });
							break;
						}
						default: {
							break;
						}
					}
				});
				break;
			}
			case "nickname": {
				// 닉네임 공란인지 검사
				if (localRegisterForm.nickname === "") {
					setIsError({ ...isError, nickname: true });
					setErrorText({ ...errorText, nickname: "닉네임을 입력해주세요" });
					break;
				}
				// 서버 연동
				requestApiWithBodyWithoutToken("post", "/check/username", { username: localRegisterForm.nickname }, {}).then(
					(res) => {
						switch (res.data.status) {
							case "true": {
								setIsError({ ...isError, nickname: false });
								setIsOkay({ ...isOkay, nickname: true });
								alert("사용 가능한 닉네임입니다.");
								break;
							}
							case "false": {
								setIsError({ ...isError, nickname: true });
								setErrorText({ ...errorText, nickname: "이미 존재하는 닉네임입니다." });
								break;
							}
							default: {
								break;
							}
						}
					},
				);
				break;
			}
			default:
				break;
		}
	};

	const checkNoError = () => {
		for (let [key, value] of Object.entries(isOkay)) {
			if (value === false) return false;
		}
		return true;
	};

	const onClickSubmitBtn = () => {
		// 비밀번호 형식 검사
		const regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/g);
		if (regExp.test(localRegisterForm.password) === false) {
			setIsError({ ...isError, password: true });
			setErrorText({
				...errorText,
				password: "형식에 맞지 않습니다 ( 영어 + 숫자 + 특수문자, 8 ~ 20 자리 )",
			});
			return;
		}
		// 비밀번호 확인과 같은지 검사
		if ((localRegisterForm.password === localRegisterForm.passwordConfirm) === false) {
			setIsError({ ...isError, passwordConfirm: true });
			setErrorText({
				...errorText,
				passwordConfirm: "비밀번호가 일치하지 않습니다.",
			});
			return;
		}
		// 서버 로직
		if (checkNoError()) {
			requestApiWithBodyWithoutToken(
				"post",
				"/user",
				{
					id: localRegisterForm.id,
					username: localRegisterForm.nickname,
					password: localRegisterForm.password,
				},
				{},
			).then((res) => {
				switch (res.status) {
					case 200: {
						setIsError({ id: false, nickname: false, password: false, passwordConfirm: false });
						Register();
						break;
					}
					case 403: {
						alert("이미 가입된 정보입니다.");
						break;
					}
				}
			});
		} else {
			alert("중복 확인을 해주세요");
		}
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
						<S.FormButton name="id" onClick={onClickOverlap}>
							중복확인
						</S.FormButton>
					</S.FormInputDiv>
					<S.FormErrorText isError={isError.id}>{errorText.id}</S.FormErrorText>
				</S.FormInputWrapper>
				<S.FormInputWrapper>
					<S.FormInputDiv>
						<S.FormButtonInput
							name="nickname"
							placeholder="별명"
							autoComplete="off"
							onChange={onChangeForm}
							isError={isError.nickname}
						/>
						<S.FormButton name="nickname" onClick={onClickOverlap}>
							중복확인
						</S.FormButton>
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
				<S.FormInput
					name="passwordConfirm"
					type="password"
					placeholder="비밀번호 재확인"
					onChange={onChangeForm}
					isError={isError.passwordConfirm}
				/>
				<S.FormErrorText isError={isError.passwordConfirm}>{errorText.passwordConfirm}</S.FormErrorText>
				<S.FormSubmitButton onClick={onClickSubmitBtn}>가입하기</S.FormSubmitButton>
			</S.BodyWrapper>
		</ModalForm>
	);
};

export default RegisterModalForm;
