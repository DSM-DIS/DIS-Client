import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 327px;
	background: #2e2e2e;
	flex-direction: column;
`;

export const MainAnchorWrap = styled.div`
	display: flex;
`;

export const MainAnchor = styled.div`
	display: flex;
	color: white;
	font-size: 30px;
	font-weight: bold;
`;

export const SubAnchorWrap = styled(MainAnchorWrap)``;

export const SubAnchor = styled(MainAnchor)`
	color: #a8a8a8;
	font-size: 25px;
	font-weight: 300;
`;

export const SubText = styled(SubAnchor)`
	font-size: 20px;
`;
