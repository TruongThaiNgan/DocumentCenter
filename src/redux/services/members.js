import axios from "axios";
import { takeLatest, call, put } from 'redux-saga/effects'
import { getMembersInCompanyFails, getMembersInCompanySuccess } from "../actions/members";
import { GET_MEMBERS_OF_COMPANY } from "../actions/types";


function getMembersInCompanyAPI(id) {
    axios.defaults.baseURL = 'http://localhost:8080';
    return axios.get(`/users/company/${id}`)
}

function* membersServices(params) {
    const res = yield call(getMembersInCompanyAPI, params.data);
    if (res.status >= 200 && res.status <= 300) {
        yield put(getMembersInCompanySuccess(res.data));
    } else {
        yield put(getMembersInCompanyFails(res.data));
    }
}

function* service() {
    yield takeLatest(GET_MEMBERS_OF_COMPANY, membersServices)
}

export default service;