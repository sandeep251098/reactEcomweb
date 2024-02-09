import { ActionTypes } from "../constant/Index";

export const SignUpAction = (data) => {
    //console.log(data);
    return {
        type: ActionTypes.SIGNUP_DATA,
        payload: data
    }
}