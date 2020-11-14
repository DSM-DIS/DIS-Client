import React from "react";
import * as S from "./styles";

const ModalFormInput = (props) => {
	const { name, onChange, error, inputType, placeHolderText } = props;

	return (
		<S.Container
			value={name}
			onChange={onChange}
			error={error}
			type={inputType}
			placeholder={placeHolderText}></S.Container>
	);
};

export default ModalFormInput;
