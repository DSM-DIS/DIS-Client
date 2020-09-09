import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	display: flex;
	z-index: 2;
	width: calc(100% - 100px);
	height: 80px;
	padding: 0 50px;
	background: white;
	box-shadow: 0px -10px 15px 4px rgba(191, 191, 191, 1);
	align-items: center;
	justify-content: space-between;
`;

export const HeaderLogo = styled.div`
	display: flex;
	height: auto;
	color: #f76d6d;
	font-size: 50px;
	font-weight: bold;
	align-items: center;
	justify-content: center;
`;

export const HeaderButtonWrap = styled.div`
	display: flex;
	width: 283px;
	align-items: center;
	justify-content: space-between;
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
	align-items: center;
	justify-content: center;
	box-sizing: border-box;

	transition: all 0.3s ease-in-out;

	&:hover {
		cursor: pointer;
		background: #ff9d9d;
		color: white;
		border: 0px;
	}
`;
