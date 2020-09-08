import React from 'react';
import * as S from './styles';

const Modal = (props) => {
	const { onModalClick } = props;

	return (
		<S.Container onClick={onModalClick}>
			<S.Modal>
				<S.ModalCloseBtn onClick={onModalClick} />
				{props.children}
			</S.Modal>
		</S.Container>
	);
};

export default Modal;
