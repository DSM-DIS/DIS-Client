import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../../modules/redux/modal";
import CodeModal from "../modal/Modal/Codemodal/CodeModal";
import LotoutModal from "../modal/Modal/LogoutModal/LogoutModal";
import * as S from "./styles";

const Header = () => {
	const dispatch = useDispatch();
	const modalOn = useCallback((Modal) => dispatch(showModal(Modal)), [dispatch]);

	return (
		<S.Container>
			<S.HeaderLogo>DIS</S.HeaderLogo>
			<S.HeaderButtonWrap>
				<S.HeaderButton onClick={() => modalOn(CodeModal)}>{`코드입력`}</S.HeaderButton>
				<S.HeaderButton onClick={() => modalOn(LotoutModal)}>{`로그아웃`}</S.HeaderButton>
			</S.HeaderButtonWrap>
		</S.Container>
	);
};

export default Header;
