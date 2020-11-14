import React from "react";
import * as S from "./styles";
import Diary from "./Diary/Diary";
import { useSelector } from "react-redux";

const DirayWrap = () => {
	const diaryList = useSelector((state) => state.diaryList.diaryList);

	return (
		<S.Container>
			<Diary mode={"init"} />
			{/* {diaryList.map((diary) => (
				<Diary key={diary.id} diary={diary}/>
			))} */}
		</S.Container>
	);
};

export default DirayWrap;
