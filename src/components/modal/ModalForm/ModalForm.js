import React from "react";
import * as S from "./styles";

const ModalForm = (props) => {
	const { children } = props;

	return <S.Container>{children}</S.Container>;
};

export default ModalForm;
