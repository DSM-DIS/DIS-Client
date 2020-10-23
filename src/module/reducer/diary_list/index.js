const initialState = {
    diaryList = [],
}

const diaryListReducer = (state = initialState, action) => {
    switch (action.type) {

        default: {
            return { 
                ...state
            }
        }
    }
}

export default diaryListReducer;