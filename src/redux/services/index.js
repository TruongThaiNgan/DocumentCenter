import authService from './authentication';

export default function* IndexSaga () {  
  yield [
    authService()
  ]
}

