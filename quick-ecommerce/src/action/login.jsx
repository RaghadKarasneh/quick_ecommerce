
import {GET_USER, USER_ERROR} from './types'
import axios from 'axios';

export const login=(email,password)=> async dispatch => {

    try{
        const res = await axios.get('http://localhost/Quick_Ecommerce/quick_ecommerce/quick-ecommerce/API/login.php?email='+email+'&password='+password);
        dispatch( {
            type: GET_USER,
            payload: res.data
        })

    }
    catch(e){
        dispatch( {
            type: USER_ERROR,
            payload: console.log(e)
        })
    }
}
