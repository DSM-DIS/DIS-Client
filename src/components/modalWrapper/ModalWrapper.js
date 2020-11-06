import React from "react";
import * as S from "./styles";

const ModalWrapper = (props) => {
	const { modalData } = props;
	const { ModalOff } = props;

	const { isShow, modalElement } = modalData;
	const Modal = modalElement;
	const PreventModalOff = (e) => {
		e.stopPropagation();
	};

	console.log("components/ModalWrappper : Modal");
	console.log(Modal);

	return (
		<>
			{isShow && (
				<S.Container onClick={ModalOff}>
					{Modal && <Modal PreventModalOff={PreventModalOff} ModalOff={ModalOff} />}
				</S.Container>
			)}
		</>
	);
};

export default ModalWrapper;
