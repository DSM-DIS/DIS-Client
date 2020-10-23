import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 100%;
	background: #ffffff;
	align-items: center;
	justify-content: center;
`;

export const ErrorWrap = styled.div`
	position: relative;
	display: flex;
	width: 540px;
	height: 340px;
	border: 5px solid black;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;

	&::after {
		position: absolute;
		display: flex;
		content: 'error';
		width: 200px;
		height: 50px;
		font-size: 54px;
		background: #ffffff;
		align-items: flex-end;
		justify-content: center;
		top: 0;
		transform: translateY(-50%);
	}
`;

export const MainText = styled.p`
	color: #000000;
	font-size: 130px;
	font-weight: bold;
`;

export const SubText = styled.p`
	color: #000000;
	font-size: 30px;
	font-weight: bold;
`;
