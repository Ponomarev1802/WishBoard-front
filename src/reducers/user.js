import {
    REG_USER_REQUEST,
    REG_USER_SUCCESS,
    REG_USER_ERROR,
    AUTH_USER_REQUEST,
    AUTH_USER_SUCCESS, AUTH_USER_ERROR
} from "../actions/UserActions";

export const initialState = {
        name: '',
        surname: '',
        following: '',
        followers: '',
        balance: ''
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case REG_USER_REQUEST:
            alert('Запрос');
            return state;
        case REG_USER_SUCCESS:
            alert('Успех');
            return state;
        case REG_USER_ERROR:
            alert('Ошибка');
            return state;
        case AUTH_USER_REQUEST:
            alert('Запрос');
            return state;
        case AUTH_USER_SUCCESS:
            alert('Успех');
            console.log('Payload', action.payload);
            return action.payload.user;
        case AUTH_USER_ERROR:
            alert('Ошибка');
            return state;
        default:
            return state;
    }
}
