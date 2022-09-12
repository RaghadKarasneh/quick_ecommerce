import {GET_USER} from '../action/types';
const initialState = {
    user:'',
    loading:true,
    error:''
}

export default function(state = initialState, action){
    switch(action.type){

        case GET_USER:
            if(action.payload !== ''){
                return{...state,
                    user:action.payload,
                    loading:false,}
            }else{
                return{
                    ...state,
                    error:' email or password is invalid',
                    loading:false,
                }
            }
        case 'logout':
           
                sessionStorage.clear();
           
        default: return state
    }

}