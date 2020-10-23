import { SET_DIARY_BOOK_LIST } from "../../action/diary_list";

const initialState = {
    diaryList = [],
}

const diaryListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIARY_BOOK_LIST: {
            return {
                ...state,
                diaryList: action.payload
            }
        }
        default: {
            return { 
                state
            }
        }
    }
}

export default diaryListReducer;