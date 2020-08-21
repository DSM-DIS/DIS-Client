import React from 'react';
import * as S from './styles';

const Modal = (props) => {
	return (
		<S.Container>
			<S.Modal>{props.children}</S.Modal>
		</S.Container>
	);
};

export default Modal;
