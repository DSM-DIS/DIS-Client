import React from "react";
import * as S from "./styles";

const ModalFormInput = (props) => {
	const { inputType, placeHolderText } = props;

	return <S.Container type={inputType} placeholder={placeHolderText}></S.Container>;
};

export default ModalFormInput;
