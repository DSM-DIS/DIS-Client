import React from "react";
import * as S from "./styles";

const ModalWrapper = (props) => {
	const { modalData } = props;
	const { ModalOff } = props;

	const { Modal, show } = modalData;

	const PreventModalOff = (e) => {
		e.stopPropagation();
	};

	return (
		<>
			{show && (
				<S.Container onClick={ModalOff}>
					<Modal PreventModalOff={PreventModalOff} ModalOff={ModalOff}></Modal>
				</S.Container>
			)}
		</>
	);
};

export default ModalWrapper;
