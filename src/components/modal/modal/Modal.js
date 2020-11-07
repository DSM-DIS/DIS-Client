import React from "react";
import * as S from "./styles";

const Modal = (props) => {
	const { children } = props;
	const { PreventModalOff } = props;

	return <S.Container onClick={(e) => PreventModalOff(e)}>{children}</S.Container>;
};

export default Modal;
