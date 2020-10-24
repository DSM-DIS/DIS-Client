import { combineReducers } from "redux";
import diaryListReducer from "./diary_list";

const rootReducer = combineReducers({
	diaryListReducer,
});

export default rootReducer;
