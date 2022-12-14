import authService from './authentication';
import rolesService from './roles';
import filesService from './file';

import { all } from 'redux-saga/effects'
export default function* IndexSaga () {  
  yield all([
    authService(),
    rolesService(),
    filesService(),
  ])
}

