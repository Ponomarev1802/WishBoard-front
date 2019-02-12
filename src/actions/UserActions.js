export const
    REG_USER_REQUEST  = 'REG_USER_REQUEST',
    REG_USER_SUCCESS  = 'REG_USER_SUCCESS',
    REG_USER_ERROR    = 'REG_USER_ERROR',
    AUTH_USER_REQUEST = 'GET_USER_REQUEST',
    GET_USER_REQUEST  = 'GET_USER_REQUEST',
    GET_USER_SUCCESS  = 'GET_USER_SUCCESS',
    GET_USER_ERROR    = 'GET_USER_ERROR',
    LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST',
    LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS',
    LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR';

export function regUser(profile) {
    return dispatch => {
        dispatch({
            type: REG_USER_REQUEST
        });

        fetch('/user', {
            method: 'POST',
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: !res.status.err ? REG_USER_SUCCESS : REG_USER_ERROR
                })
            })
            .catch(err => {
                console.log('Error: ', err);
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
                        type: GET_USER_SUCCESS,
                        payload: res
                    });
                } else {
                    dispatch({
                        type: GET_USER_ERROR
                    });
                }
            })
            .catch(err => {
                console.log('Error: ', err);
            })
    }
}

export function getUser() {
    return dispatch => {
        dispatch({
            type: GET_USER_REQUEST
        });

        fetch('/user')
            .then(res => res.json())
            .then(res => {
                if (res.status.auth) {
                    dispatch({
                        type: GET_USER_SUCCESS,
                        payload: res
                    });
                } else {
                    dispatch({
                        type: GET_USER_ERROR
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function logoutUser() {

    return dispatch => {

        dispatch({
            type: LOGOUT_USER_REQUEST
        });

        fetch('/logout', {
            method: 'POST'
        })
            .then(res => res.json())
            .then(res => {
                if (!res.status.auth) {
                    dispatch({
                        type: LOGOUT_USER_SUCCESS
                    })
                } else {
                    dispatch({
                        type: LOGOUT_USER_ERROR
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

}