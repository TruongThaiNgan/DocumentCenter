import { LOG_IN } from "../actions/types";

const initialState = {
    test: 1
}

function authReducer(state = initialState, action) {
    console.log('authReducer' + JSON.stringify(action));
    switch (action.type) {
        case LOG_IN:
            console.log('LOG_IN');
            return {
                ...state,
                test: state.test +1,
            }
    
        default:
            break;
    }
    return state;
}

export default authReducer;