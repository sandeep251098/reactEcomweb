import { ActionTypes } from "../constant/Index";

export const ProductListReducer = (state = [], { type, payload }) => {

    switch (type) {
        case ActionTypes.PRODUCT_LIST:
            return state = payload;
        // case ActionTypes.REMOVE_PROD_LIST_DATA:
        //     return state = []
        default:
            return state;
    }

}