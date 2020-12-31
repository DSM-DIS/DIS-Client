import React, { useCallback } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { showModal } from "../../../../modules/redux/modal";
import DiaryModal from "../../../modal/Modal/DiaryModal/DiaryModal";

const DefaultDiary = () => {
	const dispatch = useDispatch();
	const modalOn = useCallback(
		(modal) => {
			dispatch(showModal(modal));
		},
		[dispatch],
	);

	const { default: img } = require("../../../../asset/diary/createDiaryBtn.svg");

	return (
		<S.Container>
			<S.DiaryShape mode={"init"} onClick={() => modalOn(DiaryModal)}>
				<img src={img} />
			</S.DiaryShape>
			<S.DiaryText>{`일기 생성하기`}</S.DiaryText>
		</S.Container>
	);
};

export default DefaultDiary;
