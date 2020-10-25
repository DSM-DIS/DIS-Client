import { combineReducers } from "redux";
import diaryListReducer from "../redux/diary_list";

const rootReducer = combineReducers({
	diaryListReducer,
});

export default rootReducer;
