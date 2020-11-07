import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Text = styled.p`
	color: ${(props) => (props.color ? props.color : "#000000")};
	font-size: ${(props) => (props.font_size ? props.font_size : "50px")};
	font-weight: ${(props) => (props.font_weight ? props.font_weight : "bold")};
`;
