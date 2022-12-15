import axios from "axios";
import Router from 'next/router';
import { takeLatest, call, put, takeEvery } from 'redux-saga/effects'
import { loginFail, loginSuccess, signUp } from '../actions/authentications';
import { LOG_IN, SIGN_UP } from "../actions/types";


function loginApi(params) {
    axios.defaults.baseURL = 'http://localhost:8080';
    return axios.post('/auth/login', params)
}

function signUpApi(params) {
    axios.defaults.baseURL = 'http://localhost:8080';
    return axios.post('/user/create', params)
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

function* signUpService(params) {
    const res = yield call(signUpApi, params.data);
    if (res.status >= 200 && res.status <= 300) {
        Router.push('/login')
    } else {
        yield put(loginFail(res.data));
    }
}

function* service() {
    yield takeLatest(LOG_IN, loginServices),
    yield takeLatest(SIGN_UP, signUpService)

}

export default service;