import styled, { css } from 'styled-components';

export const Container = styled.div`
	position: fixed;
	display: flex;
	top: 80px;
	left: 0;
	width: 100%;
	height: calc(100% - 80px);
	background: rgba(0, 0, 0, 0.81);
`;

export const Modal = styled.div`
	position: fixed;
	display: flex;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	padding: 80px 50px 60px 50px;
	border-radius: 30px;
	background: white;
	flex-direction: column;
`;

export const ModalCloseBtn = styled.div`
	position: absolute;
	display: flex;
	top: 20px;
	right: 20px;
	width: 39px;
	height: 39px;
	background: url('../../../src/asset/ModalCloseBtn.png') no-repeat;

	&:hover {
		cursor: pointer;
	}
`;

// export const MainModal = styled(Modal)`
// 	display: flex;
// 	padding: 50px 50px;
// 	align-items: center;
// 	justify-content: space-around;
// 	flex-direction: column;
// `;

// export const ModalTitle = styled.div`
// 	display: flex;
// 	width: 100%;
// 	justify-content: center;
// `;

// export const MainModalWrap = styled.div`
// 	position: relative;
// 	display: flex;
// 	height: 65px;
// 	width: 580px;
// 	justify-content: space-between;
// `;

// export const ModalOKBtn = styled.button`
// 	display: flex;
// 	height: 65px;
// 	width: 106px;
// 	border: none;
// 	border-radius: 15px;
// 	background: #8b8b8b;
// 	color: white;
// 	font-size: 20px;
// 	font-weight: bold;
// 	align-items: center;
// 	justify-content: center;

// 	transition: all 0.3s ease-in-out;

// 	&:hover {
// 		cursor: pointer;
// 		background: #4b4b4b;
// 	}

// 	&:active {
// 		background: #6b6b6b;
// 	}
// `;

// export const ModalInput = styled(ModalOKBtn)`
// 	width: 411px;
// 	padding: 0 18px;
// 	background: #f3f3f3;
// 	color: #4f4d4d;
// 	font-size: 25px;

// 	border: 1px solid #ff0000;

// 	&:hover {
// 		cursor: auto;
// 		background: #f3f3f3;
// 	}

// 	&:active {
// 		background: #f3f3f3;
// 	}

// 	${(props) =>
// 		props.error
// 			? css`
// 					&::placeholder {
// 						color: #c6c6c6;
// 					}
// 			  `
// 			: ''}
// `;
