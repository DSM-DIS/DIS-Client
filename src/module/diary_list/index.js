export const SET_DIARY_BOOK_LIST = 'diary_list/SET_DIARY_BOOK_LIST';

const GET_DIARY_BOOK_LIST_SAGA = 'diary_list/GET_DIARY_BOOK_LIST_SAGA';


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