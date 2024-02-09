import { ActionTypes } from "../constant/Index";

export const AddToCardReducer = (state = [], { type, payload }) => {

    switch (type) {
        case ActionTypes.ADD_TO_CARD:
            return state = [...new Set([...state, payload])];

        case ActionTypes.REMOVE_TO_CARD:
            const newArrayData = state.filter(item => item.id !== payload.id);
            return state = newArrayData;


        case ActionTypes.INC_DATA:
            return state = payload;

        case ActionTypes.DEC_DATA:
            return state = []

        case ActionTypes.REMOVE_All_DATA:
            return state = []
        default:
            return state;
    }

}