import React, { useCallback, useEffect } from "react";
import * as S from "./styles.js";
import DiaryWrap from "./DirayWrap/DirayWrap";
import { useDispatch } from "react-redux";
import { showModal } from "../../../modules/redux/modal/index.js";
import CodeModal from "../../modal/Modal/Codemodal/CodeModal";
import DiaryModal from "../../modal/Modal/DiaryModal/DiaryModal";

const Drawer = () => {
	/* testing */
	const dispatch = useDispatch();
	const test = useCallback(() => dispatch(showModal(CodeModal)), [dispatch]);

	useEffect(() => {
		console.log("test");
		test();
	});
	/* testing */

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
