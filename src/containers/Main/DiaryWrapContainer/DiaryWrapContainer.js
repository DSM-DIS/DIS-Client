import React from "react";
import { useSelector } from "react-redux";
import DirayWrap from "../../../components/drawer/DirayWrap/DirayWrap";

const DiaryWrapContainer = () => {
	const diaryList = useSelector((state) => state.diaryList.diaryList);

	console.log(`diaryList ${diaryList}`);

	return <DirayWrap diaryList={diaryList} />;
};

export default DiaryWrapContainer;
