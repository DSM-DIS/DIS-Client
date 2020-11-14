import React, { useCallback, useState } from "react";
import * as S from "./styles";
import ModalForm from "../ModalForm";
import ModalFormBtn from "../ModalFormBtn/ModalFormBtn";
import ModalFormInput from "../ModalFormInput/ModalFormInput";
import ModalFormLabel from "../ModalFormLabel/ModalFormLabel";
import { useDispatch, useSelector } from "react-redux";
import { createNewDiaryBookSaga } from "../../../../modules/redux/diary_list";

const DiaryModalForm = () => {
	const [name, setName] = useState("");

	const dispatch = useDispatch();
	const createDiary = useCallback((name) => dispatch(createNewDiaryBookSaga(name)), [dispatch]);

	const error = useSelector((state) => state.modal.error);

	const onChange = useCallback(
		(e) => {
			setName(e.target.value);
		},
		[name],
	);

	return (
		<ModalForm>
			<S.FormItemWrap>
				<ModalFormInput
					name={name}
					onChange={onChange}
					error={error.state}
					inputType={"text"}
					placeHolderText={"일기장 이름"}
				/>
				<ModalFormBtn text={"확인"} btnClick={() => createDiary(name)} />
			</S.FormItemWrap>
			{error.state && <ModalFormLabel text={error.text} />}
		</ModalForm>
	);
};

export default DiaryModalForm;
