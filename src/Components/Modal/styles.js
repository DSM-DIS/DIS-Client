import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.81);
`;

export const Modal = styled.div`
	position: fixed;
	display: flex;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	border-radius: 20px;
	background: white;
`;

export const MainModal = styled(Modal)`
	display: flex;
	width: 694px;
	height: 353px;
	flex-direction: column;
`;

export const ModalTitle = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;

export const MainModalWrap = styled.div`
	display: flex;
	height: 65px;
	justify-content: space-between;
`;

export const ModalOKBtn = styled.button`
	display: flex;
	height: 65px;
	width: 106px;
	border-radius: 15px;
	background: #8b8b8b;
	color: white;
	font-size: 20px;
	font-weight: bold;
	justify-content: center;
`;

export const ModalInput = styled(ModalOKBtn)`
	width: 447px;
	background: #f3f3f3;
	color: #4f4d4d;
	font-size: 25px;
`;
