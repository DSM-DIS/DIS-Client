import { call, put, takeEvery } from "redux-saga/effects";
import { DIARY_SERVICE } from "../../../lib/API";
import { methodType, requestApiWithBodyWithToken, requestApiWithoutBodyWithToken } from "../../../lib/REQUEST_API";
import {
	CREATE_NEW_DIARY_BOOK_SAGA,
	GET_DIARY_BOOK_LIST_SAGA,
	JOIN_DIARY_BOOK_BY_CODE_SAGA,
	setDiaryBookList,
} from "../../redux/diary_list/index";
import { dropModal, setError } from "../../redux/modal";

function* getDiaryBookListSaga() {
	try {
		const REQUEST_URL = DIARY_SERVICE.GET_DIARY_BOOK_LIST();

		console.log("getDiaryBookListSaga");

		const res = yield call(requestApiWithoutBodyWithToken, methodType.GET, REQUEST_URL);

		console.log(res);
		yield put(setDiaryBookList(...res.data.diaryBooks));

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

		const res = yield call(requestApiWithBodyWithToken, methodType.POST, REQUEST_URL);

		console.log(res);

		yield put(getDiaryBookListSaga());
		yield put(setError({ state: false, text: "" }));

		console.log("Success joinDiaryBookListSaga");
	} catch (error) {
		console.log("Failed joinDiaryBookListSaga");
		console.log(error);

		switch (error.status) {
			case 404: {
				yield put(setError({ state: true, text: "코드와 일치하는 일기장을 찾을 수 없습니다." }));
			}
		}
	}
}

function* createNewDiaryBookSaga(payload) {
	try {
		if (!payload.payload) {
			yield put(setError({ state: true, text: "코드를 입력해주세요" }));
			throw new Error("Null Code Exception");
		}

		const REQUEST_URL = DIARY_SERVICE.GET_DIARY_BOOK_LIST();

		const res = yield call(requestApiWithBodyWithToken, methodType.POST, REQUEST_URL, { name: payload.payload });

		console.log(res);

		yield put(getDiaryBookListSaga());
		yield put(setError({ state: false, text: "" }));
		yield put(dropModal());

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
