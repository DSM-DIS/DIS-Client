import React from "react";
import * as S from "./styles";

const Diary = (props) => {
	const { diary } = props;

	const { id, name, code, owner } = diary;

	return (
		<S.Container>
			<S.DiaryShape>{`DIARY`}</S.DiaryShape>
			<S.DiaryText>{name}</S.DiaryText>
		</S.Container>
	);
};

export default Diary;
