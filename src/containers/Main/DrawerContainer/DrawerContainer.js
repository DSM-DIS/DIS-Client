import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "../../../components/drawer/Drawer";
import { getAuthInfoSaga } from "../../../modules/redux/auth";
import { getDiaryBookListSaga } from "../../../modules/redux/diary_list";

const DrawerContainer = () => {
	const username = useSelector((state) => state.auth.username);

	const dispatch = useDispatch();

	const initAuthName = useCallback(() => {
		dispatch(getAuthInfoSaga());
	}, [dispatch]);
	const initDiaryBookListSaga = useCallback(() => {
		dispatch(getDiaryBookListSaga());
	}, [dispatch]);

	useEffect(() => {
		initAuthName();
		initDiaryBookListSaga();
	}, []);

	return <Drawer username={username} />;
};

export default DrawerContainer;
