import React from "react";
import * as S from "./styles";
import ModalForm from "../ModalForm";
import ModalFormBtn from "../ModalFormBtn/ModalFormBtn";
import ModalFormInput from "../ModalFormInput/ModalFormInput";
import ModalFormLabel from "../ModalFormLabel/ModalFormLabel";
import { useDispatch, useSelector } from "react-redux";

const DiaryModalForm = () => {
	const error = useSelector((state) => state.modal.error);

	console.log("DiaryModalForm : error");
	console.log(error);

	return (
		<ModalForm>
			<S.FormItemWrap>
				<ModalFormInput error={error} inputType={"text"} placeHolderText={"일기장 이름"} />
				<ModalFormBtn text={"확인"} />
			</S.FormItemWrap>
			{error && <ModalFormLabel text={error} />}
		</ModalForm>
	);
};

export default DiaryModalForm;
