import React from "react";
import * as S from "./styles.js";
import DiaryWrapContainer from "../../containers/Main/DiaryWrapContainer/DiaryWrapContainer.js";

const Drawer = (props) => {
	const { username } = props;

	return (
		<S.MainWrap>
			<S.MainHeader>
				<S.MainHeaderText>
					<S.UserName>{username || `아린`}</S.UserName>님의 서랍장
				</S.MainHeaderText>
			</S.MainHeader>
			<DiaryWrapContainer />
		</S.MainWrap>
	);
};

export default Drawer;
