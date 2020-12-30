import { combineReducers } from "redux";
import auth from "./auth";
import diaryList from "./diary_list";
import diaryInfo from "./diary_info";
import modal from "./modal";

const rootReducer = combineReducers({
	auth,
	diaryList,
	diaryInfo,
	modal,
});

export default rootReducer;
