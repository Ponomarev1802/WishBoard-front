export const REG_USER_REQUEST = 'REG_USER_REQUEST';
export const REG_USER_SUCCESS = 'REG_USER_SUCCESS';
export const REG_USER_ERROR = 'REG_USER_ERROR';
export const AUTH_USER_REQUEST = 'AUTH_USER_REQUEST';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_ERROR = 'AUTH_USER_ERROR';

export function regUser(profile) {
    return dispatch => {
        dispatch({
            type: REG_USER_REQUEST
        });

        fetch('/newUser', {
            method: 'POST',
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: res.status.req ? REG_USER_SUCCESS : REG_USER_ERROR
                })
            })
    }
}

export function authUser(data) {
    return dispatch => {
        dispatch({
            type: AUTH_USER_REQUEST
        });

        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if (res.status.auth) {
                    dispatch({
                        type: AUTH_USER_SUCCESS,
                        payload: res
                    });
                } else {
                    dispatch({
                        type: AUTH_USER_ERROR
                    });
                }
            })
    }
}