import { all } from "redux-saga/effects";
import authSaga from "./auth";
import diaryListSaga from "./diary_list";

function* rootSaga() {
	yield all([diaryListSaga(), authSaga()]);
}

export default rootSaga;
