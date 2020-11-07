import React from "react";
import Modal from "../Modal";
import ModalHeader from "../../modalHeader/ModalHeader";
import ModalCloseBtn from "../../ModalCloseBtn/ModalCloseBtn";
import DiaryModalFooter from "../../ModalFooter/DiaryModalFooter/DiaryModalFooter";

const DiaryModal = () => {
	return (
		<Modal>
			<ModalCloseBtn />
			<ModalHeader text={"일기장생성"} />
			<DiaryModalFooter />
		</Modal>
	);
};

export default DiaryModal;
