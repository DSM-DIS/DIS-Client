import { put, takeEvery } from "redux-saga/effects";
import { DIARY_SERVICE } from "../../../lib/API";
import { methodType, requestApiWithBodyWithToken, requestApiWithoutBodyWithToken } from "../../../lib/REQUEST_API";
import {
	CREATE_NEW_DIARY_BOOK_SAGA,
	GET_DIARY_BOOK_LIST_SAGA,
	JOIN_DIARY_BOOK_BY_CODE_SAGA,
	SET_DIARY_BOOK_LIST,
} from "../../redux/diary_list/index";
import { setError, SET_ERROR } from "../../redux/modal";

function* getDiaryBookListSaga() {
	try {
		const REQUEST_URL = DIARY_SERVICE.GET_DIARY_BOOK_LIST();

		// const res = requestApiWithoutBodyWithToken(methodType.GET, REQUEST_URL);
		//
		// console.log(res);
		// yield put({ type: SET_DIARY_BOOK_LIST, payload: res.data.diaryBooks });

		console.log("Success getDiaryBookListSaga");
	} catch (error) {
		console.log("Failed getDiaryBookListSaga");
		console.log(error);
	}
}

function* joinDiaryBookByCodeSaga(payload) {
	try {
		if (!payload.payload) {
			yield put(setError({ state: true, text: "코드를 입력해주세요" }));
			throw new Error("Null Code Exception");
		}

		const REQUEST_URL = DIARY_SERVICE.JOIN_DIARY_BOOK_BY_CODE();

		// const res = requestApiWithBodyWithToken(methodType.POST, REQUEST_URL);

		// console.log(res);

		// yield put({ type: GET_DIARY_BOOK_LIST_SAGA});
		yield put(setError({ state: false, text: "" }));

		console.log("Success joinDiaryBookListSaga");
	} catch (error) {
		console.log("Failed joinDiaryBookListSaga");
		console.log(error);
	}
}

function* createNewDiaryBookSaga(payload) {
	try {
		if (!payload.payload) {
			yield put(setError({ state: true, text: "코드를 입력해주세요" }));
			throw new Error("Null Code Exception");
		}

		const REQUEST_URL = DIARY_SERVICE.GET_DIARY_BOOK_LIST();

		// const res = requestApiWithBodyWithToken(methodType.POST, REQUEST_URL, {name: payload.payload});

		// console.log(res);

		// yield put({ type: GET_DIARY_BOOK_LIST_SAGA });
		yield put(setError({ state: false, text: "" }));

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
