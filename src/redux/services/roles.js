import axios from "axios";
import { takeLatest, call, put, takeEvery } from 'redux-saga/effects'
import { getRolesFails, getRolesSuccess } from "../actions/roles";
import { GET_ROLES } from "../actions/types";
const host = process.env.API;


function getRoleApi(id) {
    axios.defaults.baseURL = 'http://localhost:8080';
    return axios.get(`/role/${id}`)
}

function* getRolesServices(params) {
    const res = yield call(getRoleApi, params.data);
    if (res.status >= 200 && res.status <= 300) {
        yield put(getRolesSuccess(res.data));
    } else {
        yield put(getRolesFails(res.data));
    }
}

function* service() {
    yield takeLatest(GET_ROLES, getRolesServices)
}

export default service;