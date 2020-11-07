import styled from "styled-components";

export const TextSpan = styled.span`
	font-size: ${(props) => (props.font_size ? props.font_size : "20px")};
`;

export const TextBold = styled.strong``;
