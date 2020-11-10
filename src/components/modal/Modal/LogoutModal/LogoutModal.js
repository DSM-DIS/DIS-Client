import React from "react";
import Modal from "../Modal";
import ModalHeader from "../../ModalHeader/ModalHeader";
import LogoutModalForm from "../../ModalForm/LogoutModalForm/LogoutModalForm";

const LogoutModal = () => {
	return (
		<Modal>
			<ModalHeader fontSize={"25px"} text={"현재 기기에서 로그아웃 하시겠습니까?"} />
			<LogoutModalForm />
		</Modal>
	);
};

export default LogoutModal;
