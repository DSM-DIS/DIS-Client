import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
	schoolLaptop: '1538px',
	monitor: '1918px'
})

export const NameBar = styled.div`
	display: flex;
	margin: 0 auto;
	width: 900px;
	height: 70px;
	background: #ff9d9d;
	align-items: center;
	justify-content: space-between;
	${customMedia.lessThan('schoolLaptop')`
		margin-top: 2rem;
	`}
	${customMedia.greaterThan('monitor')`
		margin-top: 5rem;
		width: 1100px;
		height: 90px;
	`}
`;

export const DiaryName = styled.div`
	color: #fff;
	font-weight: bold;
	font-size: 1rem;
	margin: 20px;
	${customMedia.greaterThan('monitor')`
		margin: 40px;
		font-size: 1.3rem;
	`}
`;

export const UserNum = styled.div`
	color: #fff;
	font-weight: bold;
	margin: 20px;
	${customMedia.greaterThan('monitor')`
		margin: 40px;
		font-size: 1.3rem;
	`}
`;
