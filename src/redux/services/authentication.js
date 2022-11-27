import axios from "axios";
import { takeLatest, call, put, takeEvery } from 'redux-saga/effects'
import { loginFail, loginSuccess } from '../actions/authentications';
import { LOG_IN } from "../actions/types";
const host = process.env.API;

function loginApi(params) {
    return axios.post({url: `${host}/login`, data: params})
}

function* loginServices(params) {
console.log('services');

    // const res = yield call(loginApi, params);
    
    // if (res.status == 200) {
        // loginSuccess();
    // } else {
    //     loginFail(res.data);
    // }
}

function* service() {
    console.log('service');
    yield takeEvery('LOG_IN', loginServices)
}

export default service;