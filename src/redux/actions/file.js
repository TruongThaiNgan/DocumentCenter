import { GET_FILE_BY_USER_ID, GET_FILE_BY_USER_ID_FAILS, GET_FILE_BY_USER_ID_SUCCESS } from "./types";

export function getFilesByUserId(data) {
    return {
        type: GET_FILE_BY_USER_ID,
        data,
    }
}

export function getFilesByUserIdSuccess(data) {
    return {
        type: GET_FILE_BY_USER_ID_SUCCESS,
        data,
    }
}

export function getFilesByUserIdFails(data) {
    return {
        type: GET_FILE_BY_USER_ID_FAILS,
        data,
    }
}