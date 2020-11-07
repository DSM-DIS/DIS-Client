import React from "react";
import * as S from "./styles";
import ModalFooter from "../ModalFooter";

const DiaryModalFooter = () => {
	return (
		<ModalFooter>
			<S.TextSpan>
				최대 교환 가능한 인원은 <S.TextBold>3명</S.TextBold>입니다.
			</S.TextSpan>
			<S.TextSpan>
				일기는 <S.TextBold>코드를 입력하여 들어온 순</S.TextBold>으로 교환됩니다.
			</S.TextSpan>
		</ModalFooter>
	);
};

export default DiaryModalFooter;
