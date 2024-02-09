import { ActionTypes } from "../constant/Index";

export const CityDataReducer = (state = [], { type, payload }) => {

    switch (type) {
        case ActionTypes.CITY_DATA:
            return state = payload

        case ActionTypes.REMOVE_CITY_DATA:
            return state = []
        default:
            return state;
    }

}