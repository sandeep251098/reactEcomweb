import { ActionTypes } from "../constant/Index";

export const StateDataReducer = (state = [], { type, payload }) => {

    switch (type) {
        case ActionTypes.STATE_DATA:
            return state = payload

        case ActionTypes.REMOVE_STATE_DATA:
            return state = []
        default:
            return state;
    }

}