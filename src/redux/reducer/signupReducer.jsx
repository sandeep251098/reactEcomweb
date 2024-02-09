import { ActionTypes } from "../constant/Index";

export const SignupReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case ActionTypes.SIGNUP_DATA:
            return state = payload;
        // case ActionTypes.REMOVE_AUTH_ACTION:
        //     return state = []
        default:
            return state;
    }

}