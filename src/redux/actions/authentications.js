import { 
    LOG_IN,
    LOG_IN_SUCCESS,
    LOG_IN_FAIL,
    LOG_OUT,
    GET_USER_SESSION_STORAGE,
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
} from "./types";

export function login(username, password) {
    return {
        type: LOG_IN,
        data: {username, password}
    };
}

export function loginSuccess(data) {
    return {
        type: LOG_IN_SUCCESS,
        data,
    };
}

export function loginFail(error) {
    return {
        type: LOG_IN_FAIL,
        error,
    };
}

export function signUp(data) {
    return {
        type: SIGN_UP,
        data,
    };
}

export function signUpSuccess(data) {
    return {
        type: SIGN_UP_SUCCESS,
        data,
    };
}

export function signUpFail(error) {
    return {
        type: SIGN_UP_FAIL,
        error,
    };
}

export function logOut() {
    return {
        type: LOG_OUT,
    };
};

export function sessionStorage(user) {
    return {
        type: GET_USER_SESSION_STORAGE,
        data: user
    };
};