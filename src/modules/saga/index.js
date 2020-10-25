import { all } from "redux-saga/effects";
import diaryList from "./diary_list";

function* rootSaga() {
	yield all([diaryList]);
}

export default rootSaga;
