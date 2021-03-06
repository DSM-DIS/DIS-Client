import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	padding: 0 0 40px 0;
	align-items: center;
	justify-content: center;
`;

export const Text = styled.p`
	color: ${(props) => (props.color ? props.color : "#000000")};
	font-size: ${(props) => (props.fontSize ? props.fontSize : "50px")};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bold")};
`;
