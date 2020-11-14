import { all } from "redux-saga/effects";
import diaryListSaga from "./diary_list";

function* rootSaga() {
	yield all([diaryListSaga()]);
}

export default rootSaga;
