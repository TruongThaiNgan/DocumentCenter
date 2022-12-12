import { GET_MEMBERS_OF_COMPANY, GET_MEMBERS_OF_COMPANY_FAILS, GET_MEMBERS_OF_COMPANY_SUCCESS } from "./types";


export function getMembersInCompany(data) {
    return {
        type: GET_MEMBERS_OF_COMPANY,
        data,
    };
}


export function getMembersInCompanySuccess(data) {
    return {
        type: GET_MEMBERS_OF_COMPANY_SUCCESS,
        data,
    };
}


export function getMembersInCompanyFails(error) {
    return {
        type: GET_MEMBERS_OF_COMPANY_FAILS,
        error,
    };
}
