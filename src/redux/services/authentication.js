import axios from "axios";
import { takeLatest, call, put, takeEvery } from 'redux-saga/effects'
import { loginFail, loginSuccess } from '../actions/authentications';
import { LOG_IN } from "../actions/types";
const host = process.env.API;


function loginApi(params) {
    axios.defaults.baseURL = 'http://localhost:8080';
    return axios.post('/sign-in', params)
}

function* loginServices(params) {
    const res = yield call(loginApi, params.data);
    if (res.status >= 200 && res.status <= 300) {
        sessionStorage.setItem('user', JSON.stringify(res.data));
        yield put(loginSuccess(res.data));
    } else {
        yield put(loginFail(res.data));
    }
}

function* service() {
    yield takeLatest(LOG_IN, loginServices)
}

export default service;