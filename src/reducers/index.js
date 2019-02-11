import {combineReducers} from 'redux'
import {wishesReducer} from './wishes'
import {userReducer} from './user'
import {appReducer} from "./app";

const initialState = {};

export const rootReducer = combineReducers({
	initialState,
	app: appReducer,
	user: userReducer,
	wishes: wishesReducer
});