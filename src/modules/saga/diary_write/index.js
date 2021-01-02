import { put, takeEvery } from "redux-saga/effects";
import { DIARY_SEVICE } from "../../../lib/API";
import { methodType, requestApiWithoutBodyWithToken, requestApiWithBodyWithToken } from "../../../lib/REQUEST_API";
import { GET_DIARY_PAGE_SAGA,CREATE_NEW_DIARY_PAGE_SAGA,SET_DIARY_PAGE } from "../../redux/diary_write";

function* getDiaryPageSaga() {
  try{
    const REQUEST_URL = DIARY_SEVICE.GET_DIARY_PAGE();

    const res = requestApiWithoutBodyWithToken(methodType.GET, REQUEST_URL);

    put({type:SET_DIARY_PAGE,payload: res.data});
  } catch (error) {
    console.log('getDiaryPageSaga');
    console.log(error);
  }
}

function* createNewDiaryPageSaga() {
  try{
    const REQUEST_URL = DIARY_SEVICE.CREATE_NEW_DIARY_PAGE();
    const res = requestApiWithBodyWithToken(methodType.POST, REQUEST_URL);
    put({type:CREATE_NEW_DIARY_PAGE_SAGA});
  } catch (error) {
    console.log('createDiaryPageSaga');
    console.log(error);
  }
}

function* diaryPageSaga() {
  yield takeEvery(GET_DIARY_PAGE_SAGA, getDiaryPageSaga);
  yield takeEvery(CREATE_NEW_DIARY_PAGE_SAGA,createNewDiaryPageSaga);
}

export default diaryPageSaga;