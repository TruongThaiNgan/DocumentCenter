import { combineReducers } from 'redux';
import authReducer from './authentication';
import rolesReducer from './roles';
import membersReducer from './members'

export default combineReducers({
    authReducer,
    rolesReducer,
    membersReducer,
})