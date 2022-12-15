import axios from "axios";
import { takeLatest, call, put } from 'redux-saga/effects'
import { getFilesByUserIdFails, getFilesByUserIdSuccess } from "../actions/file";
import { getMembersInCompanyFails, getMembersInCompanySuccess } from "../actions/members";
import { GET_FILE_BY_USER_ID, GET_MEMBERS_OF_COMPANY } from "../actions/types";


function getFilesByIdServicesAPI(id) {
    axios.defaults.baseURL = 'http://localhost:8080';
    return axios.get(`file/user/1`)
}

function* getFilesByIdServices(params) {
    const res = yield call(getFilesByIdServicesAPI, params.data);
    if (res.status >= 200 && res.status <= 300) {
        yield put(getFilesByUserIdSuccess(res.data));
    } else {
        yield put(getFilesByUserIdFails(res.data));
    }
}

function* service() {
    yield takeLatest(GET_FILE_BY_USER_ID, getFilesByIdServices)
}

export default service;