import { GET_ROLES, GET_ROLES_FAILS, GET_ROLES_SUCCESS } from "./types";

export function getRoles(data) {
    return {
        type: GET_ROLES,
        data,
    };
}

export function getRolesSuccess(data) {
    return {
        type: GET_ROLES_SUCCESS,
        data,
    };
}

export function getRolesFails() {
    return {
        type: GET_ROLES_FAILS,
    };
}