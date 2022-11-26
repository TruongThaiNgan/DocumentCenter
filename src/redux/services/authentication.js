import axios from "axios";
import { takeLatest, call, put } from 'redux-saga/effects'
import { loginFail, loginSuccess } from '../actions/authentications';
import { LOG_IN } from "../actions/types";
const host = process.env.API;

function loginApi(params) {
    return axios.post({url: `${host}/login`, data: params})
}

function* loginServices(params) {
    const res = yield call(loginApi, params);
    
    if (res.status == 200) {
        loginSuccess(res.data);
    } else {
        loginFail(res.data);
    }
}

function* service() {
    yield takeLatest(LOG_IN, loginServices)
}

export default service;