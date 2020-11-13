import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Drawer from "../../../components/drawer/Drawer";
import { getDiaryBookListSaga } from "../../../modules/redux/diary_list";

const DrawerContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDiaryBookListSaga());
	}, []);

	return <Drawer />;
};

export default DrawerContainer;
