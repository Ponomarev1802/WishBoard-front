import {GET_USER_SUCCESS, GET_USER_ERROR} from "../actions/UserActions";

export const initialState = {
    init: false
};

export function appReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_USER_SUCCESS:
            return {...state, init: true};
        case GET_USER_ERROR:
            return {...state, init: true};
        default:
            return state;
    }
}