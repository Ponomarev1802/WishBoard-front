import { GET_USER_SUCCESS } from '../actions/UserActions';
import {DEL_WISH} from "../actions/Actions";

export const initialState = [
];

export function wishesReducer(state = initialState, action) {
	switch (action.type) {
		case DEL_WISH:
			return action.payload;
        case 'GET_USER':
            return action.payload.wishes;
        case GET_USER_SUCCESS:
            return action.payload.wishes;
	default:
		return state;
	}
}