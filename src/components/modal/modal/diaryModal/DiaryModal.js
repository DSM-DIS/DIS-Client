import React from "react";
import Modal from "../../modal/Modal";
import ModalHeader from "../../modalHeader/ModalHeader";
import ModalCloseBtn from "../../modalCloseBtn/ModalCloseBtn";
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
