import { GET_MEMBERS_OF_COMPANY_SUCCESS } from "../actions/types";

const initialState = {
    members: []
}

function membersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MEMBERS_OF_COMPANY_SUCCESS: 
            return {
                ...state,
                members: action.data,
            }
    
        default:
            return state;
    }
}

export default membersReducer;