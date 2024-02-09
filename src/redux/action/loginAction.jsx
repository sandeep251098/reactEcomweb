import { ActionTypes } from "../constant/Index";

export const LoginAction = (data) => {
    return {
        type: ActionTypes.LOGIN_DATA,
        payload: data
    }
}