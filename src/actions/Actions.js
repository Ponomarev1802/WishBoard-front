export const DEL_WISH = 'DEL_WISH';

export const delWish = nextWishes => {
    return {
        type: DEL_WISH,
        payload: nextWishes
    }
};