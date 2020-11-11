import { put, takeEvery } from "redux-saga/effects";
import { DIARY_SERVICE } from "../../../lib/API";
import { methodType, requestApiWithBodyWithToken, requestApiWithoutBodyWithToken } from "../../../lib/REQUEST_API";
import {
	GET_DIARY_BOOK_LIST_SAGA,
	JOIN_DIARY_BOOK_BY_CODE_SAGA,
	SET_DIARY_BOOK_LIST,
} from "../../redux/diary_list/index";

function* getDiaryBookListSaga() {
	try {
		const REQUEST_URL = DIARY_SERVICE.GET_DIARY_BOOK_LIST();

		// const res = requestApiWithoutBodyWithToken(methodType.GET, REQUEST_URL);
		//
		// console.log(res);
		// put({ type: SET_DIARY_BOOK_LIST, payload: res.data.diaryBooks });

		console.log("Success getDiaryBookListSaga");
	} catch (error) {
		console.log("Failed getDiaryBookListSaga");
		console.log(error);
	}
}

function* joinDiaryBookByCodeSaga() {
	try {
		const REQUEST_URL = DIARY_SERVICE.JOIN_DIARY_BOOK_BY_CODE();

		// const res = requestApiWithBodyWithToken(methodType.POST, REQUEST_URL);

		// console.log(res);

		// put({ type: GET_DIARY_BOOK_LIST_SAGA});

		console.log("Success joinDiaryBookListSaga");
	} catch (error) {
		console.log("Failed joinDiaryBookListSaga");
		console.log(error);
	}
}

function* createNewDiaryBookSaga() {
	try {
		const REQUEST_URL = DIARY_SERVICE.GET_DIARY_BOOK_LIST();

		// const res = requestApiWithBodyWithToken(methodType.POST, REQUEST_URL);

		// console.log(res);

		// put({ type: GET_DIARY_BOOK_LIST_SAGA });

		console.log("Success createNewDiaryBookSaga");
	} catch (error) {
		console.log("Failed createNewDiaryBookSaga");
		console.log(error);
	}
}

function* diaryListSaga() {
	yield takeEvery(GET_DIARY_BOOK_LIST_SAGA, getDiaryBookListSaga);
	yield takeEvery(JOIN_DIARY_BOOK_BY_CODE_SAGA, joinDiaryBookByCodeSaga);
	yield takeEvery(CREATE_NEW_DIARY_BOOK_SAGA, createNewDiaryBookSaga);
}

export default diaryListSaga;
