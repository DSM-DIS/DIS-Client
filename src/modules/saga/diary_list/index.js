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

		const res = yield call(requestApiWithoutBodyWithToken, methodType.GET, REQUEST_URL);

		console.log(res.data.diaryBooks);
		yield put(setDiaryBookList(res.data.diaryBooks));
	} catch (error) {
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

		const res = yield call(requestApiWithBodyWithToken, methodType.POST, REQUEST_URL, { code: payload.payload });

		console.log(res);

		yield put({ type: GET_DIARY_BOOK_LIST_SAGA });
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

		const REQUEST_URL = DIARY_SERVICE.CREATE_NEW_DIARY_BOOK();

		const res = yield call(requestApiWithBodyWithToken, methodType.POST, REQUEST_URL, { name: payload.payload });

		yield put({ type: GET_DIARY_BOOK_LIST_SAGA });
		yield put(setError({ state: false, text: "" }));
		alert(`초대 코드는 ${res.data.inviteCode}입니다.`);
		yield put(dropModal());
	} catch (error) {
		console.log(error);
	}
}

function* diaryListSaga() {
	yield takeEvery(GET_DIARY_BOOK_LIST_SAGA, getDiaryBookListSaga);
	yield takeEvery(JOIN_DIARY_BOOK_BY_CODE_SAGA, joinDiaryBookByCodeSaga);
	yield takeEvery(CREATE_NEW_DIARY_BOOK_SAGA, createNewDiaryBookSaga);
}

export default diaryListSaga;
