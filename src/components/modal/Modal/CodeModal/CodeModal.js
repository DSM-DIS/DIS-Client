import React from "react";
import Modal from "../Modal";
import ModalHeader from "../../ModalHeader/ModalHeader";
import ModalCloseBtn from "../../ModalCloseBtn/ModalCloseBtn";
import CodeModalForm from "../../ModalForm/CodeModalForm/CodeModalForm";

const CodeModal = () => {
	return (
		<Modal>
			<ModalCloseBtn />
			<ModalHeader text={"코드입력"} />
			<CodeModalForm />
		</Modal>
	);
};

export default CodeModal;
