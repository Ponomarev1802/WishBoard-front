import {combineReducers} from 'redux'
import {wishesReducer} from './wishes'
import {userReducer} from './user'


export const rootReducer = combineReducers({
	profile: userReducer,
	wishes: wishesReducer,
});