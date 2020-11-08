import React, { useCallback } from "react";
import * as S from "./styles";
import ModalForm from "../ModalForm";
import ModalFormBtn from "../ModalFormBtn/ModalFormBtn";
import { useDispatch } from "react-redux";
import { dropModal } from "../../../../modules/redux/modal";
import { Logout } from "../../../../lib/LOG";

const LogoutModalForm = () => {
	const dispatch = useDispatch();
	const ModalOff = useCallback(() => dispatch(dropModal()), [dispatch]);

	const LogoutClick = () => {
		ModalOff();
		Logout();
	};

	return (
		<ModalForm>
			<S.ModalBtnWrap>
				<ModalFormBtn
					btnClick={ModalOff}
					text={"아니오"}
					width={"50%"}
					color={"#2c00ff"}
					fontSize={"25px"}
					background={"#ffffff"}
				/>
				<ModalFormBtn
					btnClick={LogoutClick}
					text={"네"}
					width={"50%"}
					color={"#2c00ff"}
					fontSize={"25px"}
					background={"#ffffff"}
				/>
			</S.ModalBtnWrap>
		</ModalForm>
	);
};

export default LogoutModalForm;
