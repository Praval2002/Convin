import {combineReducers} from "redux"; 
import usersReducer, { useReducer } from "./reducer";


const rootReducer = combineReducers({
    data: usersReducer
});


export default rootReducer;