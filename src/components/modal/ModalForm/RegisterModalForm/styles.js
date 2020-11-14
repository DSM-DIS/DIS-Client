import styled from "styled-components";

export const BodyWrapper = styled.div`
	width: 100%;
	height: 100%;
`;

export const FormInputWrapper = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: flex-end;
	margin-bottom: 30px;
`;

export const FormButtonInput = styled.input`
	width: calc(80% - 10px);
	height: 50px;
	border-radius: 9px;
	border: 1px solid #d4d4d4;
	font-size: 20px;
	font-weight: bolder;
	padding-left: 10px;
`;

export const FormButton = styled.button`
	height: 30px;
	width: 15%;
	margin-left: 5%;
	background-color: rgba(111, 111, 111, 15);
	border: none;
	color: white;
	font-weight: bold;
	border-radius: 10%;
`;

export const FormInput = styled.input`
	width: calc(100% - 10px);
	height: 50px;
	border-radius: 9px;
	border: 1px solid #d4d4d4;
	font-size: 20px;
	font-weight: bolder;
	padding-left: 10px;
	margin-bottom: 30px;
	display: block;
`;

export const FormSubmitButton = styled.button`
	width: 100%;
	height: 50px;
	text-align: center;
	background-color: rgba(111, 111, 111, 15);
	border: none;
	font-size: 20px;
	color: white;
	font-weight: bold;
	border-radius: 10px;
`;
