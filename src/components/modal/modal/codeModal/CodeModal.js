import React from "react";
import Modal from "../modal/Modal";
import ModalHeader from "../modal/modalHeader/ModalHeader";
import ModalCloseBtn from "../modalCloseBtn/ModalCloseBtn";

const CodeModal = () => {
	return (
		<Modal>
			<ModalCloseBtn />
			<ModalHeader text={"코드입력"} />
		</Modal>
	);
};

export default CodeModal;
