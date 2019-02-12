export const
    GET_WISHES_REQUEST = 'GET_WISHES_REQUEST',
    GET_WISHES_SUCCESS = 'GET_WISHES_SUCCESS',
    GET_WISHES_ERROR   = 'GET_WISHES_ERROR',
    ADD_WISH           = 'ADD_WISH',
    DEL_WISH           = 'DEL_WISH';

export const addWish = nextWishes => {
    return {
        type: ADD_WISH,
        payload: nextWishes
    }
};

export const delWish = nextWishes => {
    return {
        type: DEL_WISH,
        payload: nextWishes
    }
};

export const getWishes = () => {
    return dispatch => {
        dispatch({
            type: GET_WISHES_REQUEST
        });

        fetch('/wish')
            .then(res => res.json())
            .then(res => {
                if (res.status.auth) {
                    dispatch({
                        type: GET_WISHES_SUCCESS,
                        payload: res.wishes
                    });
                } else {
                    dispatch({
                        type: GET_WISHES_ERROR
                    });
                }
            })
            .catch(err => {
                console.log('Error: ', err);
            })
    }
};