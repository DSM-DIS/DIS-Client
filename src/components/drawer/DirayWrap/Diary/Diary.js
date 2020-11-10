import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../../../../modules/redux/modal";
import DiaryModal from "../../../modal/Modal/DiaryModal/DiaryModal";
import * as S from "./styles";

const Diary = (props) => {
	const { mode } = props;

	const dispatch = useDispatch();
	const modalOn = useCallback((modal) => dispatch(showModal(modal)), [dispatch]);

	return (
		<S.Container>
			{mode === "init" ? (
				<>
					<S.DiaryShape mode={mode} onClick={() => modalOn(DiaryModal)} />
					<S.DiaryText>{`일기 생성하기`}</S.DiaryText>
				</>
			) : (
				<>
					<S.DiaryShape>{`DIARY`}</S.DiaryShape>
					<S.DiaryText>{`Temp Text`}</S.DiaryText>
				</>
			)}
		</S.Container>
	);
};

export default Diary;
