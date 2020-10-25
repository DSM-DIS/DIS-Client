import React from 'react';
import * as S from './styles';

const onNoModalClick = (event) => {
	event.stopPropagation();
};

const Modal = (props) => {
	const { onModalClick } = props;

	return (
		<S.Container onClick={onModalClick} b="a">
			<S.Modal onClick={(e) => onNoModalClick(e)}>
				<S.ModalCloseBtn onClick={onModalClick} />
				{props.children}
			</S.Modal>
		</S.Container>
	);
};

export default Modal;
