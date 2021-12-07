import axios from "axios";
import {GET_PRODUCTS, PRODUCT_ERROR} from './types'
import { getServer } from "../util";
import { useNavigate ,} from 'react-router-dom'

export const withRouter = (Component) => { //works only for react16-17 //hooks
    const Wrapper = (props) => { 
        const history = useNavigate(); //userNavigator ~ useHistory ~withRoutes

        return (
            <Component
                history={history}
                {...props}
            />
        );
    };

    return Wrapper;
};

export const getProducts = () => async (dispatch) =>{
    try {
        const res = await axios.get(`${getServer()}/api/products`)
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: {status: err.response}
        })
    }
}

export const addProduct = (productData,history) => async(dispatch) =>{
    const config ={
        headers:{
            "Content-Type":"application/json"
        }
    }
    try {
        await axios.post(`${getServer()}/api/products`,productData,config)
        .then((res) => history.push("/dashboard/products"))
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: {status: err.response}
        })
    }
}