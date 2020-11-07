import React from "react";
import * as S from "./styles";
import ModalForm from "../ModalForm";
import ModalFormBtn from "../ModalFormBtn/ModalFormBtn";
import ModalFormInput from "../ModalFormInput/ModalFormInput";
import ModalFormLabel from "../ModalFormLabel/ModalFormLabel";

const CodeModalForm = () => {
	return (
		<ModalForm>
			<S.FormItemWrap>
				<ModalFormInput inputType={"text"} placeHolderText={"ex) 3A48YA"} />
				<ModalFormBtn text={"확인"} />
			</S.FormItemWrap>
			<ModalFormLabel text={"몰라 에러남 ㅅㄱ"} />
		</ModalForm>
	);
};

export default CodeModalForm;
