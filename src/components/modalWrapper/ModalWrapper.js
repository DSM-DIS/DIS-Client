import React from "react";
import * as S from "./styles";

const ModalWrapper = (props) => {
	const { modalData } = props;
	const { ModalOff } = props;

	const { isShow, modalElement } = modalData;
	const Modal = modalElement;

	console.log("components/ModalWrappper : Modal");
	console.log(Modal);

	return <>{isShow && <S.Container onClick={ModalOff}>{Modal && <Modal />}</S.Container>}</>;
};

export default ModalWrapper;
