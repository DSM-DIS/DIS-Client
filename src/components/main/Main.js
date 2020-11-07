import React from "react";
import * as S from "./styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DiaryWrap from "./Drawer/DirayWrap/DirayWrap";

const Main = () => {
	return (
		<S.Container>
			<Header />
			<S.MainWrap>
				<S.MainHeader>
					<S.MainHeaderText>
						<S.UserName>{`아이유`}</S.UserName>님의 서랍장
					</S.MainHeaderText>
				</S.MainHeader>
				<DiaryWrap />
			</S.MainWrap>
			<Footer />
		</S.Container>
	);
};

export default Main;
