import { combineReducers } from 'redux';
import authReducer from './authentication';
import rolesReducer from './roles';

export default combineReducers({
    authReducer,
    rolesReducer,
})