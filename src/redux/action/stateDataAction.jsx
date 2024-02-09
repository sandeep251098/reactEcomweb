import { ActionTypes } from "../constant/Index";
import axios from "axios";

export const StateDataAction = () => {
    return async function (dispatch) {

        await axios.get(process.env.REACT_APP_STATE_API)
            .then(response => {
                 //console.log(response.data.data);
                dispatch({
                    type: ActionTypes.STATE_DATA,
                    payload: response.data.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}