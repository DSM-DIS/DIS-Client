import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	position: relative;
	width: calc(100% - 80px);
	height: 207px;
	margin-top: auto;
	padding: 60px 0 60px 80px;
	background: #f2f2f2;
	flex-direction: column;
`;

export const MainAnchorWrap = styled.div`
	display: flex;
	width: 340px;
	margin-left: 10px;
	align-items: center;
	justify-content: space-between;
`;

export const MainAnchor = styled.div`
	display: flex;
	position: relative;
	padding: 0 25px;
	color: black;
	font-size: 30px;
	font-weight: bold;
	justify-content: center;

	&:nth-child(n + 2)::before {
		content: '';
		position: absolute;
		width: 3px;
		height: 40px;
		left: 0px;
		background: #d6d6d6;
	}
`;

export const SubAnchorWrap = styled(MainAnchorWrap)`
	width: 625px;
	margin: 35px 0 0 0;
`;

export const SubAnchor = styled(MainAnchor)`
	color: #a8a8a8;
	font-size: 25px;
	font-weight: 500;

	&:nth-child(n + 2)::before {
		height: 20px;
		top: 10px;
	}
`;

export const SubText = styled(SubAnchor)`
	position: absolute;
	bottom: 50px;
	font-size: 20px;
	font-weight: 300;

	&::before {
		display: none;
	}
`;
