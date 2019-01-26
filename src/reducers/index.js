import {combineReducers} from 'redux'
import {wishesReducer} from './wishes'
import {userReducer} from './user'

const initialState = {
    isFetching: false
};

export const rootReducer = combineReducers({
	initialState,
	profile: userReducer,
	wishes: wishesReducer,
});