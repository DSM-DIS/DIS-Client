import React from "react";
import * as S from "./styles";

const ModalForm = (props) => {
	const { children } = props;

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return <S.Container onSubmit={(e) => onSubmit(e)}>{children}</S.Container>;
};

export default ModalForm;
