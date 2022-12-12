import authService from './authentication';
import rolesService from './roles';
import membersService from './members';

import { all } from 'redux-saga/effects'
export default function* IndexSaga () {  
  yield all([
    authService(),
    rolesService(),
    membersService(),
  ])
}

