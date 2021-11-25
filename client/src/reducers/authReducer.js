import {
    SET_CURRENT_USER, 
    SUCCESSFUL_REGISTER, 
    FAILURE_REGISTER,
    ERRORS,
    AUTH_ERROR
} from '../actions/types'
import {isEmpty} from 'lodash'

const initialState = {
    isAuthenticated : false,
    token : localStorage.getItem("token"),
    user: {},
    errors: []
}

export default function(state = initialState, action){
    const {payload} = action
    switch(action.type){
        case SET_CURRENT_USER: //if action wants to set current user coming from payload(authAction) 
            return{
                ...state,
                isAuthenticated : true,
                user: payload
            }
        case SUCCESSFUL_REGISTER:
            localStorage.setItem("token",payload.token)
            return{
                ...state,
                ...payload,
                isAuthenticated : true
            }
        case FAILURE_REGISTER:
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                isAuthenticated : false
            }
        case ERRORS:
            return{
                ...state,
                errors : payload
            }
        default:
            return state
    }
}