import axios from "axios";
import { GET_PROFILE, PROFILE_ERROR , ERRORS} from "./types";
import { getServer } from "../util";

export const getProfile = (id) =>async dispatch =>{
    try {
        const res = await axios.get(`${getServer()}/api/profile/${id}`)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusType}
        })
    }
}

export const createProfile = (profileData, history) => async dispatch =>{
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const res =axios.post(`${getServer()}/api/profile/`, profileData, config)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        const error = err.response.data.errors;
        if (error) {
            dispatch({
                type: ERRORS,
                payload: error,
            });
        } else {
            dispatch({
                type: PROFILE_ERROR,
                payload:{msg: err.response.statusType}
            });
        }
    }
}