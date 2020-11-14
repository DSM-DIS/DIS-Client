import { combineReducers } from "redux";
import diaryList from "../redux/diary_list";
import diaryInfo from "../redux/diary_info";
import modal from "../redux/modal";

const rootReducer = combineReducers({
	diaryList,
	diaryInfo,
	modal,
});

export default rootReducer;
