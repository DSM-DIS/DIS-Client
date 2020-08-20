import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 80px;
	background: white;
	justify-content: center;
`;

export const HeaderLogo = styled.div`
	display: flex;
	position: absolute;
	left: 24px;
	width: 123px;
	height: 56px;
	color: #f76d6d;
	font-size: 50px;
	font-weight: bold;
`;

export const HeaderButtonWrap = styled.div`
	display: flex;
	position: absolute;
	right: 66px;
`;

export const HeaderButton = styled.button`
	display: flex;
	width: 129px;
	height: 49px;
	color: #ff9d9d;
	font-size: 20px;
	font-weight: bold;
	border: 4px solid #ff9d9d;
	border-radius: 49px;
	background: white;
	align-content: center;
	justify-content: center;
`;
