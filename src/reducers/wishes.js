import { AUTH_USER_SUCCESS } from '../actions/UserActions';

export const initialState = [];

export function wishesReducer(state = initialState, action) {
	switch (action.type) {
		case 'DEL_WISH':
			console.log(action.payload);
			return state;
        case 'GET_USER':
            return action.payload.wishes;
        case AUTH_USER_SUCCESS:
            return action.payload.wishes;
	default:
		return state;
	}
}
