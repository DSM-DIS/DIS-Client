import styled from 'styled-components';

export const MainWrap = styled.div`
	display: flex;
	width: 100%;
	margin: 0px 0 130px 0;
	flex-direction: column;
`;

export const MainHeader = styled.div`
	display: flex;
	height: 45px;
	width: calc(100% - 54px);
	padding: 65px 0 65px 54px;
	align-items: center;
	justify-content: flex-start;
`;

export const MainHeaderText = styled.div`
	display: flex;
	color: black;
	font-size: 25px;
	align-items: baseline;
	justify-content: center;
`;

export const UserName = styled.div`
	display: flex;
	color: black;
	font-size: 50px;
	font-weight: bold;
`;
