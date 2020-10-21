import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import * as S from './styles';

const CodeModal = (props) => {
	const { onModalClick } = props;

	const [error, setError] = useState({
		state: true,
		message: 'Error',
	});

	return (
		<Modal onModalClick={onModalClick}>
			<S.ModalTitle>코드입력</S.ModalTitle>
			<S.ModalForm>
				<S.ModalInput error={error.state} placeholder={`ex) 3A48YA`} />
				<S.ModalSubmit type="submit" value="확인" />
			</S.ModalForm>
			{error.state && (
				<S.ModalErrorMessage>{error.message}</S.ModalErrorMessage>
			)}
		</Modal>
	);
};

export default CodeModal;
