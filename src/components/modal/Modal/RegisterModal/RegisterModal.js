import React from "react";
import Modal from "../Modal";
import ModalCloseBtn from "../../ModalCloseBtn/ModalCloseBtn";
import RegisterModalForm from "../../ModalForm/RegisterModalForm/RegisterModalForm";

const RegisterModal = () => {
	return (
		<Modal>
			<ModalCloseBtn />
			<RegisterModalForm />
		</Modal>
	);
};

export default RegisterModal;
