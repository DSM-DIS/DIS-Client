import React, { useCallback } from "react";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { showModal } from "../../../modules/redux/modal";
import RegisterModal from "../../modal/Modal/RegisterModal/RegisterModal";

const Header = () => {
	const dispatch = useDispatch();
	const modalOn = useCallback((Modal) => dispatch(showModal(Modal)), [dispatch]);

	return (
		<S.HeaderWrapper>
			<S.HeaderLogo>DIS</S.HeaderLogo>
			<S.HeaderButtonDiv>
				<S.HeaderLoginButton>sign in</S.HeaderLoginButton>
				<S.HeaderRegisterButton onClick={() => modalOn(RegisterModal)}>sign up</S.HeaderRegisterButton>
			</S.HeaderButtonDiv>
		</S.HeaderWrapper>
	);
};

export default Header;
