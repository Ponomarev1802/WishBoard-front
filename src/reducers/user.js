import {
    REG_USER_REQUEST,
    REG_USER_SUCCESS,
    REG_USER_ERROR,
    GET_USER_REQUEST,
    GET_USER_SUCCESS, GET_USER_ERROR,
    AUTH_USER_REQUEST, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_ERROR
} from "../actions/UserActions";

export const initialState = {
    authStatus: false,
    profile: {}
};

export function userReducer(state = initialState, {type, payload}) {
    switch (type) {
        case REG_USER_REQUEST:
            return state;
        case REG_USER_SUCCESS:
            return state;
        case REG_USER_ERROR:
            alert('Ошибка');
            return state;
        case AUTH_USER_REQUEST:
            return state;
        case GET_USER_REQUEST:
            alert('Запрос');
            return state;
        case GET_USER_SUCCESS:
            return {...state, profile: payload.user, authStatus: true};
        case GET_USER_ERROR:
            return {...state, init: true};
        case LOGOUT_USER_REQUEST:
            return {...state};
        case LOGOUT_USER_SUCCESS:
            return {...state, authStatus: false};
        case LOGOUT_USER_ERROR:
            return {...state, authStatus: true};
        default:
            return state;
    }
}
