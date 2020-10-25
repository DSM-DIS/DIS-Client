import styled from 'styled-components';

export const ModalTitle = styled.div`
	display: flex;
	width: 580px;
	height: 60px;
	color: black;
	font-size: 50px;
	font-weight: bold;
	align-items: center;
	justify-content: center;
`;

export const ModalForm = styled.form`
	display: flex;
	width: 580px;
	height: 60px;
	margin-top: 50px;
`;

export const ModalInput = styled.input`
	display: flex;
	width: calc(100% - 130px);
	height: 60px;
	color: #4f4d4d;
	font-size: 25px;
	background: #f3f3f3;
	border: ${(props) => (props.error ? '1px solid #FF0000' : 'none')};
	border-radius: 20px;
	padding: 0 25px;

	box-sizing: border-box;

	::placeholder {
		color: #c6c6c6;
	}

	margin: 0;
`;

export const ModalSubmit = styled.input`
	display: flex;
	width: 100px;
	height: 60px;
	color: white;
	font-size: 20px;
	font-weight: bold;
	background: #8b8b8b;
	border: none;
	border-radius: 20px;
	justify-content: center;
	margin-left: 30px;

	transition: all 0.3s ease-in-out;

	&:hover {
		cursor: pointer;
		background: #4b4b4b;
	}
`;

export const ModalErrorMessage = styled.div`
	display: flex;
	color: #ff5353;
	font-size: 15px;
	font-weight: bold;
	margin: 10px 0 0 10px;
`;
