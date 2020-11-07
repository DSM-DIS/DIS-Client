import React from "react";
import Modal from "../Modal";
import ModalHeader from "../../modalHeader/ModalHeader";
import ModalCloseBtn from "../../ModalCloseBtn/ModalCloseBtn";

const CodeModal = () => {
	return (
		<Modal>
			<ModalCloseBtn />
			<ModalHeader text={"코드입력"} />
		</Modal>
	);
};

export default CodeModal;
