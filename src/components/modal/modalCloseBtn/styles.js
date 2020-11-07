import styled from "styled-components";

export const Container = styled.button`
	position: absolute;
	display: flex;
	top: 20px;
	right: 20px;
	width: 39px;
	height: 39px;
	background: ${(props) => `url(${props.modalCloseBtn}) no-repeat`};

	&:hover {
		cursor: pointer;
	}
`;
