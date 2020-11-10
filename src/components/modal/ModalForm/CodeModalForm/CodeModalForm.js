import React from "react";
import * as S from "./styles";
import ModalForm from "../ModalForm";
import ModalFormBtn from "../ModalFormBtn/ModalFormBtn";
import ModalFormInput from "../ModalFormInput/ModalFormInput";
import ModalFormLabel from "../ModalFormLabel/ModalFormLabel";
import { useSelector } from "react-redux";

const CodeModalForm = () => {
	const error = useSelector((state) => state.modal.error);

	return (
		<ModalForm>
			<S.FormItemWrap>
				<ModalFormInput error={error.state} inputType={"text"} placeHolderText={"ex) 3A48YA"} />
				<ModalFormBtn text={"확인"} />
			</S.FormItemWrap>
			{error.state && <ModalFormLabel text={error.text} />}
		</ModalForm>
	);
};

export default CodeModalForm;