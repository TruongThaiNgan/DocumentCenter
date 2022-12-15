import { GET_FILE_BY_USER_ID_SUCCESS } from "../actions/types";

const initialState = {
    files: []
}

function fileReducer(state = initialState, action) {
    switch (action.type) {

        case GET_FILE_BY_USER_ID_SUCCESS:
            return {
                ...state,
                files: action.data,
            }

        default:
            return state;
    }
}

export default fileReducer;