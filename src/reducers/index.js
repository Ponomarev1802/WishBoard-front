import {combineReducers} from 'redux'
import {wishesReducer} from './wishes'
import {userReducer} from './user'
import {statusReducer} from "./status";


export const rootReducer = combineReducers({
    status: statusReducer,
	profile: userReducer,
	wishes: wishesReducer,
});