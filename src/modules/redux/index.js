import { combineReducers } from "redux";
import diaryListReducer from "../reducer/diary_list";

const rootReducer = combineReducers({
	diaryListReducer,
});

export default rootReducer;
