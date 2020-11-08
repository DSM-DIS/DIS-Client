import React from "react";
import * as S from "./styles.js";
import DiaryWrap from "./DirayWrap/DirayWrap";

const Drawer = () => {
	return (
		<S.MainWrap>
			<S.MainHeader>
				<S.MainHeaderText>
					<S.UserName>{`아이유`}</S.UserName>님의 서랍장
				</S.MainHeaderText>
			</S.MainHeader>
			<DiaryWrap />
		</S.MainWrap>
	);
};

export default Drawer;
