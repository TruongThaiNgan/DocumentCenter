import { GET_USER_SESSION_STORAGE, LOG_IN, LOG_IN_SUCCESS, LOG_OUT } from "../actions/types";

const initialState = {
    user: null
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
            }

        case GET_USER_SESSION_STORAGE: {
            return {
                ...state,
                user: action.data
            }
        }

        case LOG_IN_SUCCESS: {
            return {
                ...state,
                user: action.data,
            }
        }

        case LOG_OUT: {
            return {
                ...state,
                user: null,
            }
        }
    
        default:
            return state;
    }
}

export default authReducer;