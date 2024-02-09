import { ActionTypes } from "../constant/Index";

export const AddToCardArrayIdReducer = (state = [], { type, payload }) => {

    switch (type) {
        case ActionTypes.ADD_TO_CARD_ARR_ID:
            return state = [...new Set([...state, payload])];

        case ActionTypes.REMOVE_TO_CARD_ARR_ID:
            const newArrayData = state?.filter(item => item !== payload);
            return state = newArrayData;

        case ActionTypes.REMOVE_All_ARR_ID:
            return state = []
        default:
            return state;
    }

}