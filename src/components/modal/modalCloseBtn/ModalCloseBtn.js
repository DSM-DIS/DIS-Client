import React from "react";
import * as S from "./styles";
import modalCloseBtn from "../../../asset/index";
import { useDispatch } from "react-redux";

const ModalCloseBtn = () => {
	const dispatch = useDispatch();
	const ModalOff = useCallback(() => dispatch(dropModal()), [dispatch]);

	return <S.Container onClick={ModalOff} img={modalCloseBtn}></S.Container>;
};

export default ModalCloseBtn;
