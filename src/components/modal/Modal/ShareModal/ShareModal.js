import React from "react";
import Modal from "../Modal";
import ModalHeader from "../../ModalHeader/ModalHeader";
import ModalCloseBtn from "../../ModalCloseBtn/ModalCloseBtn";

const ShareModal = () => {
	return (
		<Modal>
			<ModalCloseBtn />
			<ModalHeader text={"코드번호"} />
			<ModalHeader text={"GA1F45"}/>
		</Modal>
	);
};

export default ShareModal;
