import { ActionTypes } from "../constant/Index";
import axios from "axios";

export const CityDataAction = (value) => {
    return async function (dispatch) {

        await axios.post(process.env.REACT_APP_CITY_API, value)
            .then(response => {
                //console.log(response.data);
                dispatch({
                    type: ActionTypes.CITY_DATA,
                    payload: response.data.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}