import React from "react";
import * as S from "./styles";

const ModalFormInput = (props) => {
	const { error, inputType, placeHolderText } = props;

	return <S.Container error={error} type={inputType} placeholder={placeHolderText}></S.Container>;
};

export default ModalFormInput;
