import React from "react";
import Modal from "../Modal";
import ModalHeader from "../../modalHeader/ModalHeader";
import ModalCloseBtn from "../../ModalCloseBtn/ModalCloseBtn";
import DiaryModalForm from "../../ModalForm/DiaryModalForm/DiaryModalForm";
import DiaryModalFooter from "../../ModalFooter/DiaryModalFooter/DiaryModalFooter";

const DiaryModal = () => {
	return (
		<Modal>
			<ModalCloseBtn />
			<ModalHeader text={"일기장생성"} />
			<DiaryModalForm />
			<DiaryModalFooter />
		</Modal>
	);
};

export default DiaryModal;
