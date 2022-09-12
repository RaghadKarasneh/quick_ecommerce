import Login from "./Login";
// import registerReducer from "./reg";
// import fetch from './fetch'
import {combineReducers} from 'redux';


const AllReducers=combineReducers({
    login: Login
    // register:registerReducer,
    // users: fetch
});

export default AllReducers;