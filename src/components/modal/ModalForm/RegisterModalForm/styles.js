import styled from "styled-components";

export const BodyWrapper = styled.div`
	width: 100%;
	height: 100%;
`;

export const FormInputWrapper = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

export const FormInputDiv = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-end;
`;

export const FormButtonInput = styled.input`
	width: calc(80% - 10px);
	height: 50px;
	border-radius: 9px;
	border: ${(props) => (props.isError ? "2px solid #ff0000" : "2px solid #D4D4D4")};
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

export const FormErrorText = styled.p`
	display: block;
	width: 100%;
	height: 10px;
	font-size: 10px;
	margin-left: 10px;
	margin-bottom: 20px;
	color: #ff2a2a;
	visibility: ${(props) => (props.isError ? "visible" : "hidden")};
`;

export const FormInput = styled.input`
	width: calc(100% - 10px);
	height: 50px;
	border-radius: 9px;
	border: ${(props) => (props.isError ? "2px solid #ff0000" : "2px solid #d4d4d4")};
	font-size: 20px;
	font-weight: bolder;
	padding-left: 10px;
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
