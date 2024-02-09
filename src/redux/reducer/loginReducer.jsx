import { ActionTypes } from "../constant/Index";

export const LoginReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case ActionTypes.LOGIN_DATA:
            return state = payload;
        case ActionTypes.REMOVE_LOGIN_DATA:
            return state = {}
        default:
            return state;
    }

}