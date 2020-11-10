import { combineReducers } from "redux";
import diaryList from "../redux/diary_list";
import modal from "../redux/modal";

const rootReducer = combineReducers({
	diaryList,
	modal,
});

export default rootReducer;
