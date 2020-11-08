import styled from "styled-components";

export const Container = styled.input`
	display: flex;
	width: 65%;
	padding: 18px;
	color: #4f4d4d;
	font-size: 25px;
	font-weight: bold;
	border: ${(props) => (props.error ? "1px solid #FF0000" : "none")};
	border-radius: 15px;
	background: #f3f3f3;
	box-sizing: border-box;
	justify-content: center;

	&::placeholder {
		color: #c6c6c6;
		font-size: 25px;
		font-weight: bold;
	}
`;
