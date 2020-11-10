import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	height: 280px;
	margin: 30px;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
`;

export const DiaryShape = styled.div`
	display: flex;
	width: 100%;
	min-height: 180px;
	padding: 30px 0;
	border-radius: 20px;
	background: ${(props) => (props.mode === "init" ? "#efefef" : "white")};
	color: #333333;
	font-size: 35px;
	justify-content: center;

	transition: all 0.3s ease-in-out;

	&:hover {
		cursor: pointer;
		transform: scale(1.03);
	}
`;

export const DiaryText = styled.div`
	display: flex;
	width: 100%;
	color: white;
	font-size: 25px;
	font-weight: bold;
	align-items: center;
	justify-content: center;
`;
