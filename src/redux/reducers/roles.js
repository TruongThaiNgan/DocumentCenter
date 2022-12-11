import { GET_ROLES_SUCCESS } from "../actions/types";

const initialState = {
    roles: []
}

function rolesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ROLES_SUCCESS:
            return {
                ...state,
                roles: action.data,
            }
        default:
            return state;
    }
}

export default rolesReducer;