import { ActionTypes } from "../constant/Index";
import axios from "axios";
//import auth from "../../axios/auth";

export const ProductListAction = () => {
    return async function (dispatch) {

        await axios.get(process.env.REACT_APP_PRODUCT_API)
            .then(response => {//
                //console.log(response.data);
                dispatch({
                    type: ActionTypes.PRODUCT_LIST,
                    payload: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const AddToCardAction = (data) => {
    return {
        type: ActionTypes.ADD_TO_CARD,
        payload: data
    }
}

export const RemoveToCardAction = (data) => {
    return {
        type: ActionTypes.REMOVE_TO_CARD,
        payload: data
    }
}

export const AddToCardArrIDAction = (data) => {
    return {
        type: ActionTypes.ADD_TO_CARD_ARR_ID,
        payload: data
    }
}

export const RemoveToCardArrIDAction = (data) => {
    return {
        type: ActionTypes.REMOVE_TO_CARD_ARR_ID,
        payload: data
    }
}

export const RemoveAllArrIdAction = () => {
    return {
        type: ActionTypes.REMOVE_All_ARR_ID,
        payload: []
    }
}

export const RemoveAllDataAction = () => {
    return {
        type: ActionTypes.REMOVE_All_DATA,
        payload: []
    }
}

export const IncrementAction = (data) => {
    return {
        type: ActionTypes.INC_DATA,
        payload: data
    }
}

export const DecrementAction = (data) => {
    return {
        type: ActionTypes.DEC_DATA,
        payload: data
    }
}