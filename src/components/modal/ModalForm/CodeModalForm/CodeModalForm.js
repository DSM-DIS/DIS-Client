import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import ModalForm from "../ModalForm";
import ModalFormBtn from "../ModalFormBtn/ModalFormBtn";
import ModalFormInput from "../ModalFormInput/ModalFormInput";
import ModalFormLabel from "../ModalFormLabel/ModalFormLabel";
import { useDispatch, useSelector } from "react-redux";
import { joinDiaryBookByCodeSaga } from "../../../../modules/redux/diary_list";
import { setError } from "../../../../modules/redux/modal";

const CodeModalForm = () => {
	const [name, setName] = useState("");
	const error = useSelector((state) => state.modal.error);

	const dispatch = useDispatch();
	const joinDiary = useCallback((name) => dispatch(joinDiaryBookByCodeSaga(name)), [dispatch]);
	const errorInit = useCallback(() => dispatch(setError("")), [dispatch]);
	const onChange = useCallback(
		(e) => {
			setName(e.target.value);
		},
		[name],
	);

	useEffect(() => {
		errorInit();

		return errorInit;
	}, []);

	return (
		<ModalForm>
			<S.FormItemWrap>
				<ModalFormInput
					name={name}
					onChange={onChange}
					error={error.state}
					inputType={"text"}
					placeHolderText={"ex) 3A48YA"}
				/>
				<ModalFormBtn text={"확인"} btnClick={() => joinDiary(name)} />
			</S.FormItemWrap>
			{error.state && <ModalFormLabel text={error.text} />}
		</ModalForm>
	);
};

export default CodeModalForm;
