import {DEL_WISH, GET_WISHES_SUCCESS} from "../actions/Actions";

export const initialState = [];

export function wishesReducer(state = initialState, {type, payload}) {
	switch (type) {
		case DEL_WISH:
			return payload;
		case GET_WISHES_SUCCESS:
            return payload;
	default:
		return state;
	}
}