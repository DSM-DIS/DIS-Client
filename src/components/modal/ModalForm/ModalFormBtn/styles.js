import styled from "styled-components";

export const Container = styled.button`
	width: ${(props) => (props.width ? props.width : "106px")};
	height: ${(props) => (props.height ? props.height : "65px")};
	color: ${(props) => (props.color ? props.color : "#ffffff")};
	font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bold")};
	border: none;
	border-radius: 15px;
	background: ${(props) => (props.background ? props.background : "#8b8b8b")};

	&:hover {
		cursor: pointer;
	}
`;
