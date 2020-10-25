import { put, takeEvery } from "redux-saga/effects";
import { DIARY_SEVICE } from "../../../lib/API";
import { methodType, requestApiWithoutBodyWithToken } from "../../../lib/REQUEST_API";
import { GET_DIARY_BOOK_LIST_SAGA, SET_DIARY_BOOK_LIST } from "../../redux/diary_list/index";

function* getDiaryBookListSaga() {
	try {
		const REQUEST_URL = DIARY_SEVICE.GET_DIARY_BOOK_LIST();

		// const res = requestApiWithoutBodyWithToken(methodType.GET, REQUEST_URL);
		//
		// console.log(res);
		// put({ type: SET_DIARY_BOOK_LIST, payload: res.data.diaryBooks });

		console.log("Success getDiaryBookListSaga");
	} catch (error) {
		console.log(`getDiaryBookListSaga`);
		console.log(error);
	}
}

function* diaryListSaga() {
	yield takeEvery(GET_DIARY_BOOK_LIST_SAGA, getDiaryBookListSaga);
}

export default diaryListSaga;
